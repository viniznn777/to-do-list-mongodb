import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { GoPlusCircle } from "react-icons/go";
import { useAuth } from "../../hooks/useAuth";
import TaskBalloon from "./TaskBaloon";
import { MANAGE_TASK } from "../../api/basesURL";
import { dataFormated } from "../../utils/dataFormated";
import Loader from "../../components/Loader";
import { highlightText } from "../../utils/highlightText";

const Home = () => {
  const { logout } = useAuth();
  const [data, setData] = useState([]);
  const [textStatus, setTextStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const handleTaskDeleted = (deletedTaskId) => {
    // Atualizar o estado `data` removendo a tarefa deletada com o ID correspondente
    setData(data.filter((task) => task._id !== deletedTaskId));
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await MANAGE_TASK.get(
          `/tasks/search?searchText=${searchText}`,
          { withCredentials: true, credentials: "include" }
        );
        if (response.data.length === 0) {
          setTextStatus(
            "Não foram encontradas tarefas que correspondam à pesquisa. 😢"
          );
        }
        setData(response.data);
      } catch (err) {
        console.error("Erro ao buscar tarefas:", err);
      }
    })();
  }, [searchText]);

  useEffect(() => {
    (async () => {
      try {
        const response = await MANAGE_TASK.get("/my_tasks", {
          withCredentials: true,
          credentials: "include",
        });

        if (response.status === 204) {
          setTextStatus("Você ainda não tem tarefas 🔎");
        }

        const data = response.data.data;

        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [data]);

  return (
    <Container className="container">
      <div className="top">
        <div className="container-input">
          <IoMdSearch />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar tarefa"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
        <Link to={"/create_task"}>
          <button>
            <GoPlusCircle />
          </button>
        </Link>
        <button title="Sair" onClick={() => logout()}>
          <GrLogout />
        </button>
      </div>
      <div className="title">
        <p className="fs-1 fw-bold">Tarefas:</p>
      </div>

      {isLoading ? (
        <Loader />
      ) : data && Array.isArray(data) && data.length > 0 ? (
        data.map((item, key) => (
          <TaskBalloon
            title={highlightText(item.title, searchText)}
            id={item._id}
            date={dataFormated(item.date)}
            key={key}
            onDelete={handleTaskDeleted}
          />
        ))
      ) : data && Array.isArray(data) && data.length === 0 ? (
        <p className="fs-2 fw-bold">{textStatus}</p>
      ) : (
        <p className="fs-2 fw-bold">{textStatus}</p>
      )}
    </Container>
  );
};

export default Home;

const { MANAGE_USER } = require("../../../api/basesURL");
const { errorMessage } = require("../../../utils/toastifyMessages");

export const fetchData = async () => {
  try {
    const response = await MANAGE_USER.get("/email", {
      withCredentials: true,
      credentials: "include",
    });

    if (!response || response.status !== 200) {
      throw new Error(
        "Não foi possível carregar suas informações! Atualize e tente novamente!"
      );
    }

    return response.data;
  } catch (err) {
    console.error(err);
    errorMessage("Desculpe! Não conseguimos carregar suas informações.");
    throw err; // Re-throw o erro para que o chamador possa lidar com ele, se necessário.
  }
};

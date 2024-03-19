import styled from "styled-components";

export const Container = styled.div`
  margin-top: 35px;
  display: flex;
  max-width: 900px;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;

  .container-info-user {
    display: flex;
    align-items: center;
    gap: 32px;

    .container-username-email-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .username-and-email {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        line-height: 12px;
        padding-right: 95px;

        .email {
          color: #aaa;
        }
      }
      .container-button-edit {
        display: flex;
        align-items: flex-end;
      }
    }
  }
  .profile-options {
    display: flex;
    flex-direction: column;

    .links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;

      a {
        width: 100%;
      }

      button {
        width: 100%;
      }
    }
  }
`;

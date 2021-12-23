import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get("users?_limit=5");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const addUsers = (data) => {
  axios
    .post("users", data)
    .then((res) => {
      if (res === 200) {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteUsers = (id) => {
  axios
    .delete("users/" + id)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUsers = (id, data) => {
  axios
    .put("users/" + id, data)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

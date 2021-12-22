import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get("users");
    if (res.status == 200) {
      console.log(res);
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteUsers = (id) => {
  axios
    .delete("users/" + id)
    .then((res) => {
      if (res.status == 200) {
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
      if (res.status == 200) {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

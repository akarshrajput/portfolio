import axios from "axios";
import { showAlert } from "./alert";

export const message = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/messages",
      data: data,
    });

    console.log("Response:", res);

    if (res.data.status === "success") {
      showAlert("success", "Message sent successfully");
    }
  } catch (err) {
    showAlert("error", err.response.data.message.message);
  }
};

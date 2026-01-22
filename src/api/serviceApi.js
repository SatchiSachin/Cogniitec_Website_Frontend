import { API_BASE_URL } from "../../config/api";

export const fetchServices = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/service/list`);

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    return await response.json();
  } catch (error) {
    console.error("Service API Error:", error);
    return [];
  }
};

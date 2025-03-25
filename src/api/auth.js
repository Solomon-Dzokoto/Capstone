import { axiosInstance } from "../service/instance"
export const loginUser = async(credentials) => {
  const res = await axiosInstance.post("",credentials)
  return res
}
export const registerUser = async(credentials) => {
  const res = await axiosInstance.post("",credentials)
  return res
}
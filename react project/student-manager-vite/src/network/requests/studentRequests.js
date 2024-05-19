import { baseService } from "../services/baseService";

export const getStudent = async () => {
    try {
        const res = await baseService.get("/students");
        return res.data
    } catch (error) {
        console.error("getStudentList error:", error);
    }
};
export const postStudent = async (newStudent) => {
    try {
        const res = await baseService.post("/students", newStudent);
        return res.data
    } catch (error) {
        console.error("postStudent error:", error);
    }
};
export const deleteStudent = async (id) => {
    try {
        const res = await baseService.delete(`/students/${id}`);
        return res.data
    } catch (error) {
        console.error("deleteStudent error:", error);
    }
};
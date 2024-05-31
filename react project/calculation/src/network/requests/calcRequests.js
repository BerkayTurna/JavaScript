import { baseService } from "../services/baseService"


export const getCalc = async () => {
    try {
        const result = await baseService.get("/calc");
        if (result.status !== 200) {
            console.error("error");
        }
        return result.data;
    } catch (error) {
        console.error("error");
    }
};

// export const createCalc = async (newCalc) => {
//     try {
//         const result = await baseService.post('/calc', newCalc)
//         if (result.status !== 201) {
//             console.error("error");
//         }
//         return result.data;
//     } catch (error) {
//         console.error("error");
//     }
// };

export const removeCalc = async (id) => {
    try {
        const result = await baseService.delete(`/calc/${id}`)
        if (result.status !== 200) {
            console.error("error");
        }
        return result.data;
    } catch (error) {
        console.error("error");
    }
}
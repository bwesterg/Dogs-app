const dogsUrl = "http://localhost:3000/dogs/";

export function patchDog(updatedDog){
    fetch(dogsUrl + updatedDog.id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({dog: updatedDog})
        })
}

export function postDog(newDog){
    fetch(dogsUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({dog: newDog})
        })
}

export function deleteDog(id){
    fetch(dogsUrl + id, { method: "DELETE" } )
}
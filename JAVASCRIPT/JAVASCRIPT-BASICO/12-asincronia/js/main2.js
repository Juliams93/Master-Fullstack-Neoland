const fetchUser = document.querySelector("#fetchUser");
const userInfo = document.querySelector("#userInfo");

fetchUser.addEventListener("click",()=>{
    getfetchUserData();
});

const fetchUserData = async () => {

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            
            const success = false; // Cambia a true para simular éxito

            if (success) {
                resolve({
                    name: "Nombre del Usuario",
                    email: "usuario@example.com",
                    phone: "123-456-7890"
                });
            } else {
                reject(new Error("Error al cargar la información."));
            }

        }, 2000);
    });

    return promise;
  
};

const getfetchUserData = async () => {
    fetchUserData()
        .then((respuesta) => {
            userInfo.innerHTML = `
                <h2>${respuesta.name}</h2>
                <p>Email: ${respuesta.email}</p>
                <p>Teléfono: ${respuesta.phone}</p>

            `;
        })
        .catch((error) => {
            userInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
            console.error(error);
        });
}
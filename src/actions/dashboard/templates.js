export function getTemplates(endpoint, config) {
    let status;
    fetch(endpoint, config)
        .then((response) => {
            status = response.status;
            console.log(response.status);
            return response.json();
        })
        .then((resp) => {
            if (status === 200) {

            }
            else {
                console.log("in series 4....")
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

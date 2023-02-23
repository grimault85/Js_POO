
class LocalStorage {
    getFormData() {
        let formData;
        if (localStorage.getItem("formData") === null) {
            formData = [];
        } else {
            formData = JSON.parse(localStorage.getItem("formData"));
        }
        return formData;
    }

    addFormData(data) {
        let formData = LocalStorage.getFormData();
        formData.push(data);
        localStorage.setItem("formData", JSON.stringify(formData));
    }
}

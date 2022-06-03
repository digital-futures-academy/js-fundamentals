const Student = {
    name: "name",
    capitalisedName() {
        return this.name.toUpperCase();
    }
};
Student.name = "aroosa";
console.log(Student.capitalisedName());
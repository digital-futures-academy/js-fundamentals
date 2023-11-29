let student = {
    name: 'asia',
    capitalisedName: () => {
        console.log(student.name[0].toUpperCase() + student.name.slice(1))
    },
}
student.capitalisedName() 
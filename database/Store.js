import Realm from "realm";

const TaskSchema = {
    name: "Task",
    properties: {
        _id: "int",
        name: "string",
        status: "string?",
    },
    primaryKey: "_id",
};

const QuickStart = async () => {
    const realm = await Realm.open({
        path: "myRealm",
        schema: [TaskSchema],
    })

    // Add a couple of Tasks in a single, atomic transaction
    let task1, task2;


    realm.write(() => {
        task1 = realm.create("Task", {
            _id: 1,
            name: "go grocery shopping",
            status: "Open",
        });
        task2 = realm.create("Task", {
            _id: 2,
            name: "go exercise",
            status: "Open",
        });
    })
    console.log(`created two tasks: ${task1.name} & ${task2.name}`);

}

export default QuickStart;

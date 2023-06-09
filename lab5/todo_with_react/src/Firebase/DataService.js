import { collection, query, where, onSnapshot, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { firestore } from './init';

export const listenTodos = (callback, user) => {
    const todosRef = collection(firestore, 'todos');
    const q = query(todosRef, where("uid", "==", user.uid));
    
    const unsubscribe = onSnapshot(q, snapshot => {
        const todos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        callback(todos);
    });

    return unsubscribe;
};

export const addTodo = async (user, content, completed = false) => {
    try {
        await addDoc(collection(firestore, 'todos'),{
            uid: user.uid,
            content: content,
            completed: completed,
            created: serverTimestamp()
        });
    } catch (err) {
        console.log(err);
    }
}

export const getTodos = async (user) => {
    const todoRef = collection(firestore, 'todos');
    const q = query(todoRef, where("uid", "==", user.uid));
    const todoSnapshot = await getDocs(q);
    const todoList = todoSnapshot.docs.map(doc => doc.data());
    return todoList;
}

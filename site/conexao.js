import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://rickroll-c1060-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const contagemDB = ref(database, "quantidade");
const contagemHTML = document.getElementById('contagem');

window.addEventListener('load', async () => {
    const snapshot = await get(contagemDB);
    const contagemAtual = snapshot.val() || 0;

    const novaContagem = contagemAtual + 1;

    await set(contagemDB, novaContagem);

    contagemHTML.innerHTML = `${novaContagem} pessoas foram RickRolladas`;
});

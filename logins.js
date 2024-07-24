dayjs.extend(window.dayjs_plugin_relativeTime);

const firebaseConfig = {
	apiKey: "AIzaSyAEURruIOolyKERhlapNtKV6YEbu-OnkGE",
	authDomain: "keys-cc824.firebaseapp.com",
	databaseURL: "https://keys-cc824-default-rtdb.firebaseio.com",
	projectId: "keys-cc824",
	storageBucket: "keys-cc824.appspot.com",
	messagingSenderId: "535670990994",
	appId: "1:535670990994:web:51a2d7d69e71f16e025e4b",
	measurementId: "G-WSLYK1TVCP",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var db = firebase.database();

console.log("app", app);
console.log("db", db);

// const users = {
//     "181.66.150.198": "EGRAU (Mozos)",
//     "179.6.5.178": "io",
//     "181.66.151.87": "EGRAU (Caja)",
//     "181.66.177.9":"EGRAU (Mozos) v2"
// };

const users = {
	// 1702523972785: "User",
	1704296749853: "io",
	1704306047965: "Caja SOL",
	1704371222857: "Caja 28",
	1704372797631: "Mozos GRAU",
	1711370909600: "Mozos GRAU",
	1704372951441: "Vitrina GRAU",
	1704373325505: "Caja GRAU",
	1704629676814: "28 Mozos 1",
};

var KeysRef = db.ref("logins").orderByChild("time").limitToLast(1000);
console.log("KeysRef", KeysRef);
// firebase.firestore().collection('events').get()
KeysRef.once("value").then(
	function (snapshot) {
		const $list = $("#list");
		let i = 0;
		console.log("i", i);

		snapshot.forEach((childSnapshot) => {
			const data = childSnapshot.val();
			//(laestrellacafegourmet.restaurant.pe)
			const host = data.host.replace("www.", "");
			if (
				[
					"laestrellacafegourmet.restaurant.pe",
					"llamafood-operations-v2.web.app",
				].indexOf(host) !== -1
			) {
				return;
			}
			i++;
			const date = dayjs(data.time).format("YYYY-MM-DD hh:mm:ss SSS a");

			const type = $(data.html).attr("type");
			const name = $(data.html).attr("name");

			const class_ = users[data.IDP]?.toLowerCase().split(" ").join("-");

			const savedHost = new URL(data.savedFrom).hostname;

			$list.prepend(
				`<li class="list-group-item type-${type} name-${name} ${class_}> ${i}
            <span class="ip" title="${data.IDP}">${
					users[data.IDP] || data.IDP
				}</span> 
            wrote <span class="value" title="${data.value}">${
					data.value.length <= 40
						? data.value
						: data.value.substring(0, 40).trim() + "..."
				}</span> in <span class="title" title="${data.title}">${
					data.title.length <= 20
						? data.title
						: data.title.substring(0, 20).trim() + "..."
				}</span> <span class="host"> <a href="${
					data.url
				}" target="_blank" title="${data.url}">(${host})</a></span> 

            <span class="time" title="${date}">${dayjs(
					data.time,
				).fromNow()}</span>
            <small>
<br/>
            <textarea disabled cols="100" rows="6"> ${data.html}
            </textarea>

            </small>
          
<br/>
            ${data.id}
            <br/>
          <small>Saved from <a href="${data.savedFrom}" target="_blank">${
					savedHost || data.savedFrom.slice(0, 30) + "..."
				}</a></small>

            </li>`,
			);
		});
	},
	(err) => console.error(err),
);

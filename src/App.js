import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
	const [ notes, SetNotes ] = useState([]);

	function addItem(change) {
		SetNotes((prevalue) => {
			return [ ...prevalue, change ];
		});
	}

	function deleteItem(id) {
		SetNotes((prevalue) => {
			return prevalue.filter((Item, index) => {
				return index !== id;
			});
		});
	}
	return (
		<div>
			<Header />
			<CreateArea onAdd={addItem} />
			{notes.map((items, index) => {
				return (
					<Note id={index} key={index} title={items.title} content={items.content} onDelete={deleteItem} />
				);
			})}

			<Footer />
		</div>
	);
}

export default App;

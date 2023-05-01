import './style.scss'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Post from '../../type/Post'
import useAxios from '../../hooks/useAxios'

const Home: React.FC = () => {
	
	const [data, loading] = useAxios("https://jsonplaceholder.typicode.com/posts")
	
	if (loading) {
		return (
			<p>Loading...</p>
		)
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<ul>
					{data.map((item: Post) => {
						return (
							<li key={item["id"]}>{item["title"]}</li>
						)
					})}
				</ul>
			</IonContent>
		</IonPage>
	)
}

export default Home

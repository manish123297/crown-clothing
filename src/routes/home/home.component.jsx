import Directory from "../../components/directory/directory .component"
import {Outlet} from "react-router-dom"
function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://nova-live.imgix.net//image-279c4697-8243-4951-96a5-ca3dbc80656b.png?q=60&fm=webp&fit=crop&fp-x=0.5&crop=focalpoint&fp-y=0.5&rot=0&fp-z=1&w=700&h=466",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://www.thepostcity.com/wp-content/uploads/2021/09/leather-jackets-collection.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://static01.nyt.com/images/2021/05/27/fashion/24SNEAKERCOLORS-sacai-SUB/24SNEAKERCOLORS-sacai-SUB-superJumbo.jpg",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://media.glamour.com/photos/61ae3506d56654ca38186abd/1:1/w_2000,h_2000,c_limit/best%20winter%20dresses.jpg",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://staticg.sportskeeda.com/editor/2022/06/7212b-16557249225203-1920.jpg",
    },
  ];
  return <div>
    <Outlet></Outlet>
    {/* Here <Outlet> is added so that we can render some other component on the top of Home Component  */}
    {/* on the Browser by nesting that component inside the Home component */}
    <Directory categories={categories}></Directory>;
  </div>
}

export default Home;

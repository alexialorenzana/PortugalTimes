import React from "react";
class Api extends React.Component{
  render(){
    this.state = [
      {id: 1, image: "https://tpn-1.s3.eu-west-2.amazonaws.com/media/2569/lisbon-airport-1.jpg", title: 'Airport employee steals thousands from passengers',url: 'https://www.theportugalnews.com/news/2022-11-29/airport-employee-steals-thousands-from-passengers/72506' },
      {id: 2, image: "https://tpn-1.s3.eu-west-2.amazonaws.com/media/5071/facebook.jpg", title: '2.2 million Portuguese phone numbers for sale on the Internet', url: 'https://www.theportugalnews.com/news/2022-11-30/22-million-portuguese-phone-numbers-for-sale-on-the-internet/72545'},
      {id: 3, image: "https://tpn-1.s3.eu-west-2.amazonaws.com/media/1458/bill-oxford-udXD2NrbXS8-unsplash.jpg", title: 'Woman suspected of smuggling cocaine into prison', url: 'https://www.theportugalnews.com/news/2022-11-18/woman-suspected-of-smuggling-cocaine-into-prison/72156'},
      {id: 4, image: "https://tpn-1.s3.eu-west-2.amazonaws.com/media/7122/Page4-Speeding--Motorway--Driving.JPG", title: '230,000 fines for speeding', url: 'https://www.theportugalnews.com/news/2022-11-30/230000-fines-for-speeding/72553'},
      {id: 5, image: "https://tpn-1.s3.eu-west-2.amazonaws.com/media/914/PResident.jpg", title: 'The President receives threatening letter', url: 'https://www.theportugalnews.com/news/2022-11-17/the-president-receives-threatening-letter/72152' },
      {id: 6, image: "https://tpn-1.s3.eu-west-2.amazonaws.com/media/7305/cocaine-drugs.JPG", title: '440,000 doses of cocaine seized', url: 'https://www.theportugalnews.com/news/2022-11-25/440000-doses-of-cocaine-seized/72434'},
    ]
    return (
      <div className="#">
        <div className="footer">
        <div className="api-container">
      {this.state.map((postInfo) => {
        return <div className ="Subheading">{postInfo.title} 
        <a target="__blank" href={postInfo.url}><img className="picture" src={postInfo.image}></img></a></div>
      })}
      </div>
      </div>
      </div>
    )
  }
}
export default Api;


// this.state holds our object which renders and maps our keys and values










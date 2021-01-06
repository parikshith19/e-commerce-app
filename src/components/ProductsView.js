
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';




function ProductView({product}) {


    return( 
        <div className="mt-3 col-md-4 col-sm-6 col-12">
                <div className="card" style={{width: "18rem"}}>
                {<img className="card-img-top" src={product.image} alt="Card cap" /> }
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{product.brand}</h6>
                    <p className="card-text">{product.description}</p>
                    <Link to={`#`} className="btn btn-primary">View Product</Link>
                </div>
            </div>
        </div>
    );
}
export default function ProductsView() {
    const authStatus = useSelector(state => state.auth.status);
    

    const productsArr = [
        {
            name: "Arduino",
            brand: "Arduino",
            image: "https://a.pololu-files.com/picture/0J7808.1200.jpg?8a7bee07ca7ffbb11e11f74e99f5c3a9",
            description:"Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button"

        },
        {
            name: "Raspberry",
            brand: "Raspberry",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Raspberry_Pi_4_Model_B_-_Side.jpg",
            description:"A powerful feature of the Raspberry Pi is the row of GPIO (general-purpose input/output) pins along the top edge of the board. ... Any of the GPIO pins can be designated (in software) as an input or output pin and used for a wide range of purposes"

        },
        {
            name: "PCB",
            brand: "PCB",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXGBoYFxcXFxcaFxgaGBcYGBoXGBoZHyggGCAlGxgaITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzAlICUrMC0wMC0yLjUtLTUtKy0vLS0tLS8vLS01LS0tLy8vNy0tLS0vLS0tLS8vLS0vLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYHAf/EAEsQAAECBAMEBQYKCQMEAgMAAAECEQADEiEEMUEFIlFhBhMycZFCU4Gh0fAHFBUjUpKTscHSFiQzQ2Jyc7LhgqLxNETC4lSjJWOD/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQAAQIFBgf/xAA4EQABAwIDBAgEBQQDAAAAAAABAAIRAyEEEjETQVGhBSJhcZGx0fAyUoHBFTNC4fEUI4KyBiRi/9oADAMBAAIRAxEAPwDtcQTMXLSWK0g8CoPE0c36VKJxK0Am6gG5lg/LMB4HUeWxCDXqmm2QJW+O0pPnZf10+2Gnacnzsv66fbHLdr7NMkCpSbgs1TOnyQ2XCK3DYWbMehKrAkEBZFsg4dr2fLjAxVcTAC57+knsfsyy67CdqSfPS/rp9seHakjz0v66fbHH9oYehVNSX+j1qSQ5YBwreJuWa3qgeaLJAeo2bwZi9/VFbVyqr0lUpGHMXZ/lWR56X9dPthfKsjz0r66fbHJNqbH6sIYrJWHCS1hS5djb16+mrSgVFClUqszkNcjtF7BnL3yi9q6YVO6RrB2XZ399i7f8qyPPSvrp9sefKsjz0r7RPtjiAlgqpqe+aSDbUhyHiY7InEimWqkkCo2AqLAnveKFV5MQp+J1ZjZ+/Bdp+VZHnpX2iPbC+VZHnpX2iPbHENoYJctZQSAQBz0uXtreIBLV9IeH+Yo1yFh3SzmmC3mfRd2+VpHn5X2iPbC+VZHnpX2iPbHClyVAtWDlcAtcP6svRHgw5qbrEs/aY0214+qK25UHS5+UeP7Lu3yrI89K+0T7YXyrI89K+0R7Y4aMDMpq0LNum+eTH+ExIvZc4MCC5/gPhF7Zy1+KP+Tz9F235VkeflfaI9sL5WkeflfaI9scUOyJ13sA5qpLMAS/gI9wOASsF1moXpASHAa4KlAPnF7V3YrHSbyYyc/2XavlaR5+V9oj2wvlaR5+V9oj2xxfD7JUZ1C6kpBNyl7AVAOCxJHDN4sBtLCyVHr5Lg1AbkuxCyGTSLinUh3jQe8+ymKOKq1DGWPH0XV/laR5+V9oj2wvleR5+V9oj2xyz9I9m/8Axz9URIekGzwL4VVrE0DW404RqX+wU1NbgPE+i6d8r4fz8r7RHthfK+H8/K+0R7Y5Z+kuzf8A45+onj3QOcVLnLUZMoCUHBBRLt83oWqd3Lvwii5w/godWpVptzZQe6fRdb+V8P5+V9on2wvlfD+flfXT7Y4amWL3LsSMy7X+5y/KEVDyaqcnPvbuv3mBbd0Ln/ir4kM5ruXyvI89L+un2x58r4fz0v66fbHERD0JcKLndS/ZfUJvcN2s790XtnLLOlnvMBnNdqO2cP5+V9dPthfLOH8/K+un2xw4mJpcskFgbcIoV3FV+MO+Tmu1/LWH8/L+umCsPiULFSFBQydJBEcMSmlK6kXYMpRIpcnyXFROQz1jpHwar/VVf1D/AGpjbKjiQCnsLjHVXAFsSCd+4xwWweFEdUKDroIomOZdK5rYmcWe/wCSOlkxyrpav9bmOzOReXWB+zL3LJyarMPaB1BJCTxrc1MNmJP2KEpm4hJUVJUxYVLIIzLDi41P0TFlhcNNljq0r3VHdKSymKiVMA5UQABwLmA+jYVQogqG8oZqpyHck5fSHrDt21tTq5copWy6Sp0h2QWIbfUAedyOTxlgAEpLAU2hgqk9Y2nvROPkJIWtclN0vUE0lNwVKqAvZQ04cYr5OykrIVh1lTEWmBr8iBe/IRTT9vzCyTOUUmygKTusch6B4CLvo3h0KUCAs71mmpQSAHFSdb84pwlwB93VY2k01msgX8eS86maJ0ozAmnrFuUhQL0qd90eg3ij2mr5xd3NmP8ApEbPA7y5DpznkP1hUDZThjce3ujOdMZaU42clIAAosAwvKlk+uCt199i6dBuXML67+5U2ELTEXbN/EWjZpnVFCitaaKUpFgCAlKiWtY2Ascm1ip6FYVC8Uy0BYCCQCAb1yw4fW8N6ULT16kpyQAjlu5eqM1n5Ag42vsWB8TfuUG35HVrJrC7OQCLNmHBLOatAz5QKrEIINMqjfLHrFq3Ru0srmHfO7QKRdQcKfvvc248okmTRohKLvuqUc6QwCj9IvxDnSEzvhcJzs+eIvxudNxj0Ui1vo2Vr8IVYd6R3Xb739cRkwxU0DMgQOUkAVc4fEoEoJWVOQ4a3ZKgGI0v94taCMRtBCkhSZi+sS1AbNiO1Znz5MIzyMWBkoZg6ZjLPvj34ymlqhmbeF3/AA5RsOKZFV2WI3LSz8fKYpqV9GkghIFxoHBFj6NWEV1MgywNwqJPaM6pqiwIQCC4bLj3xTTcUkeD2Y/cbd0NGLS9wptco1mM6LW0eXSWhXGI2hiCAOrUKVBTkqJNJZwFZEODYPYa3gHpdmkaVLb62V4s5OPnzEILii6Q5luA6U3cuLgXs8V3TIklP80zJye1rqTDVJdzAkukkn6qm2dIClp6xMzqn3ihLkDVtP8ADxtts7elqlTUS5NZqSUqmSlkTGCkV0UsCiWGFR8k2tFLsIKVIEtVTBay3kv82h9NJhGep1ZjsQqYlVQcIoUVCpAfdnrAZt7PIKFzleGQn1iJslzQsEXYguCGOR4RsejLiXMI/it//JQyih2iqWs1IQsLK6lKU13AJsC3afT72Gg6LqIRMbMVENx6sxh+ip/wlVyMHMA3pasnugtcWcENrEeGlJBsnMh2SkK7gw5xIjayylhPMtT1KBSqpaiVimoWyOdhvcogwpJU7tzYsPD0wnUFrLzFZgb8Jt9EVKvoTY5Z2B9Wp5Qyahw7gNcuWe4DDibw6UBqWz+7L05emHVkOxIcMWLOOB4i2XKBNSjCARKiMXnRvFJG4ZZmVrCbLKbgOAGsTr3PFEYsdkzVplLAQlTlW8Qp07pNilgLcdQ0bpfEnOjwNtJ4HyUvSWy0koTLqQg09amYSTXcEZ5F+Dxtfg3P6sr+of7UxzPAzO2quglBT2VLUoOk0JKlGji/AEax0f4Nj+rL/qH+1MbaQXghPYTKcTnbvBtw9/RbMKhRGDChldtWCo5L0vIOLnJK0ocqIKiQCQE7tgbl9bR1hZjk3SfEqRi56krUguoClruAGU+kCqxIntSGOybMZ9J+xUGz9sdUCkqK9RQEJQXQkX3Qp7XY5jM3eelE4omXpSlaFAipN0qAepb+W+R0iiTM3Cm9yDnulnzGpv8AfEE8ixANs3NnNQGlnsG4wEVSuLRxrxDYkaxwurfayJEl00ALLgAhILEHeDEk37tIpL6Z95DW1IzJ9+bXOhIfgpSci4Nix9IMPeMPqSVWLr7RwdN+HC/FHbBmKTPl3sC7VKtuqYs/raz84C2lNJnLJLkkOf8AQmJcPOoUFAXDtk4JBDhwRrwisxeHWpdSVqALONzQN9DlBqVVo1TnR+NpsYWvN5RmDxBROSoLozuC2qbZ/fGslbPCkKnhypakOGSrJ8isMnRxckjPSMNhMNMCgpS1OMqaPxRGhTtBJSEEFDlJWoUmqnIqTSHU1ntnGzVpymquOw7iJMojb+DCa1gUBFyUyhdRPZUQphdXC1uN6CaUFSgmbXQpgmhYJBWTUSbCwFhB+0scHKd2YFCy1INSezZN9Gfmz6QEZJd1VEtqGN1Bb2Ad3Oeiu6AuLdy59arSh2Xf2dvFOhBFJBZjmCUh7uRo5BfXlwEIx7yf0+iAC29c1jiNFGrDIZurXX2nZNHV05s1Tvq7MYll4JCikBDBSmdRFOlnpsb58x6Y+btpYkEjm2YsPCJcM9aaVUlwyg9iSL2vaNAoxeCBCficJLliyXW6qmUhUsS2GbCpJcs5IyOUASpKQpzcM9L3dyGPKzvwbJ4t9q4eclKVLWpSVVJLrLGkkPS9nATp90V0tBOQJ7rxpzoMJis4MIaBu9lOlyg6TQklyQWFy4z9xBi9m/G1E9cJYYqIIG6oly1nILnuZjo4Ia1zzt917wh6/wAO+IyoWlYoYp9F2YX+qOHQ5v8Au0X5f+sO/RAD/vJX+3PhlFphZUnq0LTLTQ5VVRKACWpuFqJ7RbP2wLg9npTLMuZNSGClU1SGAuA6lAkWUTe19M4czFd7bvtbVCnojwxks9zfltE2z8CqQpaeuC0OMghlbinIVakgsMtYMT0aklAUlC5g+kJstvLfNIFmHLe4ZjSMVKwqqVSlgEy1MSD2SpxlfhwLaxTiYuUOrVqRD4b2yq3HY9KJQlpdYUyQXIKN5yCLgh1ZhsoD2UAZssG4KkuOIifpJjxOKaHNJKiTQGSVpZmzy5n1xBsstMln+JP3wrVJLD3LkuMls3XWpuxsKkn9XQWKRkrytcmt7tDNp7HwqZa2kIfq1kEAWpSS/uIKxQNcyz70vQERFjZhUlT33Zw0yoysI+eU61XM05z4ngvYVMPSyHqDTgFyk5c9L+7w1OLWh0pUyV9oWuxA/E+MPUQ3P7oFmneT7+UmPoQsV4OmSDZThIjpHwcj9WV/VP8AaiMDsuUlcxloWsUkslaEXtcqXYDxcsI3XwaKfDL/AKn/AIIjdIdaV0+jWOFUPO8HktiIUeCPYbXoEZMVHJulFXxrEFJYVEK3gHBazO6ha7A5R1ZUcl6TAfGsWSA7gAmUVf8A2/uzmw1uIDW+xSGPaHUwD2/6lVM0jfCVWrskElJAdlOWyHEawBMlFRD5AhQDqF0vc3Yi40ewglSlKYlyBuv3DJ+DR4uFW2uvOteaZzDUjzTFEAHVhEK5ClFkuTqxI9OdoKmSFhKVlBCSQxIBB4WOneImwW1USCorlCYVAAF2pzJ8beEGpU5N0fDUC+plcIJVedl4mzIVx7QPjeCVbPnlD9W1wDccS9Pc0WZ6ZJsfi+X8Wdu6Gfpki4+LjN+1/iDbEHcusejKaqpmxJwJ3CwN8uyxvnbLhrA+I2fOT5BYhRBcXShnPLtDxjQfpel3+L6Md8++RgXFdKJMwdScOmopNLl6XDFQDe9ohpWUd0e2LLOpxBIcFTDUPZuB0aD8JtFaU0VmlQbOxDMx8BFz0eQOplspkhUxwVUvbNubt3CKPaUhKFhKQkJKQRSszEl894gd7c4E9gAskauHy0w5p1RD/wCP8x6GtYs1/aLZQFIntY5aHhyMFFR4nh/iFTZc4ty6r3T3bn+EWmzJKF007sxJSzzGqLvupoL9zjvipJiywe1gGl9WhKiAnrCpiG1KvJglMibo2HjOCUTjtmTph3Ugl0gklbnJPZKH1dtB3QTs/CzgahJTKVvJZKzvFJ3kAHNTpLMbMX4CvKlJ66Z1ilpW1aBMSQAbuhQdyAAMgdO8KTgcO7onE0lJBmLUgEgOQBTxdzzhqGTK7Dtjn2hN+5e43CYhKgpRKKllt0WJOhFz/iBEBYZ95IcsxFsiqwyBaLza05M6UZgWFLFNr5m4fdDdpfO3jnZUorGQUxawCrlqWBFi4NxC723tdIPojPAuOflxTcCttc0KGT5tb1eqHytqzpaKKlUgndysVEkcWLl75GGdW5NI7QcAOw7tYHxJe2p04d8WwobHEGyt8Z0qWsMErS/bZZNVmuHy5RLiuly5ksyzKDENY8m48o92R0bKgFzXANwnU9/CNHhdmS02TLSPRfxN4MG70+zD1anWJ14rn5xSfoHx/wAwXsucFTEcQoW17QvHQTsqWsMqWk96RFHtjoZ+8wxKVi4S+f8AKdD3xTqVoCy7AObcXXSJso1LLEuUMyUnLvN/wiDFS1UrcFmm3YZFNvflHHhtfEOQqdNChmDMW/3w+XtOcTT1sw1FmrUXJta+vCPIj/j1RpnOLdn7roP6ZbBGQqJcxtNH155sOTxD1hLEf+Xfw4gQbi8LMlmmYkoKhxFx3pPqgWSXqNhcWDDwHoj09gvOlgbugojDzEVmooSmkt1kpU1y1gEgAOeJyjoXwYf9Mv8Aqf8AgmOdypSllkpUo8Egk2zLCOh/BkfmJn9T/wAExukesPr5J/o9xNRoi11tBCjwR7Da7yKMch6WTWxWITSTUu5rUAAB9Abqr8Y66THH+lI/W5/85gFckRHauX0pVdTphzeP2KqRCWIc1ncZ5Xfv4f8AMeEWN/R7IV715q5Mo/GLn/F0BYTQaWPlt5L6D0Rn9o5eH3GNTj8fLMhABBUKRSX0DF2yEUAwXWpUQpIKabKLO4VcdzeuHGkB67zHMGJaQ6RGs9hVUFkgCC5GCOtrDN8zkPVEw2Kpv2kv60eK2Mu/zkv6w9fCDlwXX2jOKkl4QlmVnqx/E+7xWzA0x0gKINnyIfLuPfBqNmKyrRzNWV4dJ2Wc+sljXtDnziswjVU6o2DdGbJRImTFKmp7paHSOJUCS9g/GDtt7ASJaDKQvdIcj5yt0jfCaty+n8XKKnYMuqaUWdSCxIcWc5MYnR0lxGHVMQhQAKyohmDvdgGYPo0Ba3NuXMwlIVWGR9UGrZM/zS8yOwryc8w/tgrB7KnFwpCksAQ6VOauykMNebM14lT05xf0x4H2wv06xf0x4Hh3xDhwUQ9GUz+pBzNkTloUplJWl/m1S13AfslmJtAitlTAklco2YOpBAJIJYRcJ6d4v6Q9w0V+P2/Oxi+pmhwlQKFEFiSLm18rW4xZpQLK3YBrW9XdzR+H2BIEpM+aaE0upCqEqKjbdO9Z9SIqtsbPlyl0oKFpN0kDRyOF8s+caQYugJl1yx1SUula1IKvmxTRuhuOZzjJYjEkkqWbqJJGjqN2gb40CWrBgaGtBleJqCSEpsrMJyVTfuLP648kYZMwBYCXB3QoPfPI2zjWqw2yAQ82c6bZEjubJniSUrZSQ3WTPsxfi7d/vaLNJ0In9FViRr3rNTWqLAAcBp78mHIZRZ9EtkidiFKIdKGJ5nQfj6Ih20rDFSThlqUkhQUVBmIOQGQz0jWfB1KHUzVamY3glLfeYyxsPgoNGj/2cr/r5q+Rg4JRgRwguSiC0S4ZXcVcMK0O6iLAoiMoi1FzT4R9ihKkYlAZ1BK246H0hx6BGWwKldaijt1pp76g3rjqvTqSDgpr6UEd4WmOTYeaULSsZpUkjvBBELVheVxMa0MrDxWj6QyMQZiEzaSSGQEdnRxe75Z8orJWxZ4zltUopDqSN4JUo+UMgCb2tB07bMyfPlLUlO6RSkBTXIfiTkPCNFKWpQG/TUtQYJWHZK90VIBCrP8AypPeKa1r3EqMp069RxBPvvWH2UtBmgFaCKT+0mKlIdgc0bxINmH3R0P4Lv8Ap5n9Qf2JjBdHcFMTPSsJmgFKyDLloKlAOCQZlgmxBI7tY3nwXn5ib/UH9oiwAHCOJ8kxhQA5kf8Ar7LbiFHghQwuqijHHuk5/Wp/9RX3x2Axx7pKf1uf/UV98Ar6j6rj9Mfkt7/sUGrCKpK92nkpJ1bJ3gYgsS4zAZ73fIa5Q8kNziKcd2wL37srW74WcuD1SbKfEGV1Uul+sffd7534Z5NA2Cwq5iwhCaiRlbL02hTVyylYCZgcgIqUglIY1FbJAOjUtHuDQpKZk0tuDd3iC9aA7JUFMyjyvBGkGQeSeLA5wDo/x4BTzejGIuRKNmBBUjO+V8hbxhn6L4kt8yb5byPzRGrb7MDYuM+tbLMkTLh9DyOceHbyyzdXc0hlrzBYWrcZPfjBIaE3sqMSM3L0RI6P4ljVIU2RKVoB05schAe0djT5LFUs0nIkp5k2SToOMeDpCeKO6uZ+ePMTtLrJSlKUApK0AEKUbKCybKUQLoTlwiiBuWXCkRAme3+Eb0YCut7JYpVe+W6QGtVcZeyKXaSfnV/zK++LXosxni5JKVFzvE2GpPvlrFXtH9qv+Y/fB6a6OAjZW4qFGFUUqWEkpSQFEaVOz97RNhMIFhZqakOzEvYlvVG52Bg/1cVYUI6yWADvTBO3XSpSQWRdjf1Rk5s2YTOeSEKKUVICGCQEaAl02YtfODkQnBdD7YlUzALdkZIozJzTpEWzx86jv79DBCwqmY8kBk23ey7ksXte3JtIF2Y/Wotr36cIy7RXCI6SP8YUwGSMqvoJzfWK9eHrAIeoEOCQA13pfPT3y103o4MTiCVzKXZKRSFFky5Z47vby5RUYPZEpUiabdehYTLSFJBXvJB3M7B/cQtluuO5pFQntKrGCpkzUOo+uJEYcMokZIqudXzzgTELImzWPlKHoqMEzVU86pYGpz+7KGSuuEsMbek/cn39Mbr4OMYHmyTqak+gAK+8euMDhFH0X8bP+EWWysWqUsTEFlJU48BY8iLemFHvy1CVxK1XZYov96LtsmC0RQ9HttS8Sh0lljtIOafaOcXiFQwCCuyx4eMzTZPIiJUSFUA7T2jLkIMyYoJHrJ4JGpi1ZIAkrOfCPjgjC9XrMUPBJCifGkemOVvcd4+8Rc9J9rqxK1TFWDMhP0Uvl36kxSA3Hf8AiIUqOzGy8/iKwrVC4aaBWOHm0qCtUkEDQsXuQQR6PVFqOkKmO4gZkFiouWBusmmz5cu+KjGSFywQtBQogKFXC921/wAQPKXm97Wu1wRdtdfGBtc5uiEx9SlpZWEvaCytKpwROSl2QpASlylg5QxLcDG6+DAASJo//YP7RHO5aQQslaE0h2USCu7UoABqPgOcdC+DA/NTv5x/bG2OJcJ92TmBdUNVubSDC24hR4IUNruItRjjfSQ/rU/+ov747GqOL9Iz+tT/AOqv+4wDEaj6/Zcfpf8AKb3/AGQRVEUxdoRMNUYVJXBaFIqSAFHrJRppFpiSVVfQHlNrw9Bj3CMuuWCAooPlDRUtTNpYHOxblEDcokw09ctVaFFKsnsbcLxG5Z0TbH0g+Ygd/b6WXnyPOvZNr9tOXG+WY8YYrZM76Kfrpgud0oxQLGZnnYXfUWtp4Qw9LMVb53LLdTz5c4YhibDcPxPgEGdiz1AugWvZaLevnEa9mLlyj1jCpaCADewmg92Y+tBn6TYtj87Y57ifZ7vDF7QxOLKZRKpyg9CUpFWRJYJF7B/REkfpWzsgOpMqbou3xjLyFcOV7593sit2mD1i/wCY/fFpsVSZJ65cxKdxVSWJWljqGLZd8UGMxlc5RDFBuFOAbmwI7uUGomU9gLUo7UbsvaS5ExMxN6T2SSx9/wAIfh1mYJkxe+qzkuS1JS/aHIa6RWqKfpDxhIUACAtgcwFZ98HlPCFe4yYAlbkuoN+zYEg6sojXT0xXbO/ao7+XA8YGVPJf51THN1u/e+cTYOYlKkqKnuzAVHLgBeKJspYLcJMlM3tXWiXUAwVXuhnDs4AsNH4mPZ5MtyhKkzGW3zZIqUrdPI3y5aXcSfgZRbFDeP6upLuwJIGQ1YZH/knFFVKhMmMFBSyUuyQhYURYs5L2JOo1gYSbdCTpdMwHwfSpstE1WImJVMckCWCASSfpOfCDlfB/KYj42r6AJk5EOfpcIFw21Z6UEScdiBLRkE4ZK0pSd4bxQXDak6x7M6ZzS3/5BQaxbCoNV87oLWii9H21MauCz3SXo/8AEpgl9YZm6F1UUjfIAB3i3ZJ9MVOGUKjnkcuIIAeLPpPtBM6aJiljETKaesUigpAuAkIZN3Ob5NFVhzSonKyncaPzharcyuPjC11QlqPlTyghSFKSoags3BiLiNDg+neJQGUUTOahfxSRGKxM1SiAQwFgGAPp8c4SUng/oMYbmbvS7C+n8LoW5xPT/EKDJEtHMAk+st6ozeO2guaqqZMK1cScuQGQHIRVUnh7u3pzhr+7GLJc7Uq3uqVPicSisRMDNqYilJKiALkkADiSQwiL3yiaXuqSQd4EG2jF/wAPVFaLIAbYq329IxAI+MEklNlOCGGluD+uKyXnybnrBe1tozZwdanIBYMG52GcA4fic8smyNop0EyFKhaSS2Y7dVOFEOwQXDGpAUQ+qSeyeYjonwYfsp386f7Y548dC+DA/Nzv50/2mN0vjCY6PeTWAO4FbgQoQhQ4u8ilRzra/QrEzJ0yYlUplLUoOpTsVEh92OjEQ1UU9gdql6+HZWAD1yxfQXFDWV9dX5YA2n0ZnyEGYugpGdKiTe2oGsdamJjP9L0thZpGe7n/ADp4wF9FoaSk6vR1FrHETYFc1xa5JlSwhKkzAGWTcEtc53vcZNAEqboc2B01DjLVvfMCSY7l+PvlA02UM/V/xp/z3rZsxuuQ5+c9ZEwgmIUyUG9LcnNuWcNKKbp9I9/f7jUBDgaAp81ZFiTTyUrUg3DszgZC9tc5sItAUCQpQD2lqpUbFmUAW0fk8MqCh3w5U1ZZ1qLEnM5kAf2pA7hEnkjNqaFxuNEzZuG6ypNaAVChpiiCqotYgZj8YuNnCXIUJMySlFRqSqcjgShs2AIANTsL2LiKKcAB2bvYjNyXL8Q3gRzMDqyPvwgjamXRM06+QdVaPaG1USyEiRhlaE0gvkKhS4ZntU9nLZQVgsYhaDMVhZSU2oHVuF2IYryFhm3ojJyUhw4LXLADlxI1PvlBHygtKUoACUJHIKL51AHeFj7YK2rJumGYp5kzzWxRLlGYUKkSQ6mQaU3FQS5IUWcWFjm/KBNsokICJ6EJSErIrlKIWhSgykgAJrpfiHYtEWGxYXLViFrZZ7QRS5pW4SAolVyQ7DU3ED7VxXxqXRLRNUoKdiLJRWQkJI5mWNMu+CF1kc17RMzovdkbVQUFEwoZIlM6UpUSCp3qUoLI3TVY6tFqnBK66oqStKpcwgXCaVEWdtBZ76s1xGV2XPRLUsTUk6fSKVIVcEKNtQfRDJW0lomqmSwkBThuRKTZmpNjlxgYfGqCMQMgBsrFG2RIK0JAmCtYVSoghlEgCpKktcjdAyycxnvT6z7YmxM0zFqJAdRJIDgBy57hePEYKWQmqalJK6VBphpSz9ZYMRowvAy6bIBcahgIjBSkLBSRMK2JSUF/JsCliTfg0FJlyKStajUyTQhdK6iWUllJIDcnyJc2i7WhM6SlWHAlFNQMwgJSpNJTMKSneYKI08pORaMsnDKUCouUpsVAKbQM7d3jzjbuqFbhsxpyUUmS9z6Tx5DlBTR6kBs2bINny5RJh5BWaQUiz7ykp4ZFRAgBukiS4qOPGiWbhilFZVL7ZRSJiCtwCXKQXCbG5/GPUYRRSlQUg1KpCBMR1gLs5QS4BJz9OV4rKeCvYv0jdKhHOGkRPisOuWaVppLP6OMQxFm4srLEy5c2YhGHQUkhmJzPHM6axYI6FYg3eV9Y/lgHoyHxUofxH+0x1ORLg7GB8krqYXDsrtL36zu+iwCegeK+lK+sr8sa7oXsOZhUTEzCklSgRSScgc3AjQykROlEGbRa0yE7SwlOm7M3VeAQokCY9gqaRBEMIiQwxUWqUKxGf6aN8Tmvluu2fbTGhVGe6bH9Tm2fsW476bQOr8BQq35bu4+S5MlLqZwM7qUEgAAm5PIQMtTpJHCHTQ5LiLTo/NkoWlU9IVKCxUCmpxRMIGTtU2UIC5XnKbGuIboZ13KtwyagzpDAqJUQAw74ehQbV7Nwa7v6o0m2toYacZaZMuUneDhKHNNBsSQwuzARS4vaKVypUoSJSFIAeYkCtbAjfLOXd7k5WaLc2JujVqFNls1/PsQYhQVhdoiXLXL6mQsr8uYl5iLN82dONmvAsYI7Us5oABmZ5KCeDb34/h+MD1OH99IMWl7H38YEmWBb0eMbGiIwgt0XstbEc3HiRE0yp7M3N/wiNA7MxkMaFFAUWbdqFrp1s7i8PxClHJNLWKUuou7PvZXYNFOaiOpEH+U/C7JnTFBCUOTcJYizPrpaJsdsPESU1Lk0g2c5HwGXsi/weIJUlEzrlIWmWksuhG8hRAWUmrK7jV+MR41coyVCUJwK5JWXnTFgpSphWCogMQzel8oYa0DemxQp5ZLrqiOBL0y1JmqJNpYUSGLAlwCAXseHCJpmxZ6U1TZZlpY3Wwb+YE2DkeOuUSbF2uJYomILVBTpWUqdglt3MMMjZ9ItU48DEGSOrSnIzJhSqYzlQeasb9yMwzd19QCsMp0nCTqqvZ2EHXIlp6qYVi7KBelWSahYqKbfwq5mL3D7JQ8t5YBV1qiDTZigAWIAZ+GurgQFj9sy01kJlKWkdWmlKSFCx60LZgvMeMUPymgU/NziQkpJ68CpR8pqbJB8nXU2iuqLIzSxtrFbTaoQwSkiy1WTdtWO6A2vDOMz8aPW9TajKgJTS9BLktnUoB308ayTjAkuOdi5s4OkPVjwqZWJZq1NTJ7NOTPlz9kQvBHBU6uHATa6LxklImhAKUuBdRCU63JyGUCTWBDKSrdBdKgRcAs41GR5iFi1KmqBUUiwSLFmfv5wOrBLyA3nACaSFEkswBgLspNkrUDHuJbvKlYQgBEUjB1glLqZyQA5CQHKiwy5w74kaSsOUhqiACEuWFVt1zk+cDhC2amBhRCrAKspKSpJsDSWKmBKAWuQGtEhkMEkopCg6XSzhyHDi4cGNQsupxdXHRL/AKyT/Mf7THW5QjkfRKX+tySALLZ24pV7DHXpcM0NCux0b+Ue/wCwRcsRMkRDLiZMMLoJzQo9hRaikMYDaPwgKlrmI6lBCFqR2y5YkOzco3hVHCtuEdfOzfrV62ao+uA1XlsR70XPx9Z9NoLDC1yvhGWz9QjNm6y/gztziu250ymYiV1XVoQFkbwW5DKflTcZmM5i8EuUE9YhaCoVJqDApOTBs4I2NjepmBaZQmmlQKVBxfygALMLa5mA7RzrErnf1FZxyPcROtv2VaZjGrhfQ5ffFthtnS+pm9ZPShSQVBIKV76bJSSlTF6ibF7RUTbvo8NStQKlBawVFyxzMBGX9SHRexplwlaobOw4VMVKmpNEuSlIpG8svWXBzATnzijxO0Ji5aJSiCiXZDJAyDOSzn05xFicctW9dhu7tkh3seZAOd7QGueQzJJ8BfhnG3GZhEq1cwimIG/tVhh9ozUIXLQoBC+0KEElxT2iHFtH5wLVAxnqbskF+KWbxzhqZ6tUvnw4Z2Vpn6IHBOpQSHOABOnJGrLkkBg9hmw0D6wNikkuc7GzhN2DZ55DK59Yi6xfA+I9sLeIL6aEi92tf0xsNhRjSDMrzDTQ2/LrAQUJSolNBsynAdTAFgbX9EQIQsZFu4t4WtlDyD9E/wC32wpilEvSfRSNORjRKPnJRePx61TCZAMmXusiuoikMN6kE6WOvoaKXi1JlKl0Os7om19lDuZYRkQeJvlwge/A+I9seseB8R7YmYrW1dM2UuzVJQuqdL6xDHdCgm5G6XF7FoL2jsCdKQJi1JUCUg0k1AqSFioFFnSR4iK8uzUl3Be3hct/xDxOXd6y/wDFmWsTfS0XmBEKw8ReF7tOUlUxRkpMuWWpSp1EWD3pvd4ckyghCVSVFYUStYU1aX7ISQyWGsNSpR7Vdha7+jOJes5H39MZJKwapF7ckydOlFaimX1aTkgmsp4iprw6WtOQ+5ocqa5JLuTmefOEEOQB6yWjOpWD/cdpco7Z+DM5M1CEusIFLqAANYB1Gh1i4m7EBkpKJaOvJSWUQUrI3lBAKzbtW4CAOjZ+cUDkQkWXS2+HIsamsW5RfTtrIBSAggBbXq7DKcgG+WgvvZQxTaMq6GGptNNC7SlhEuWnqkWWkKcIIYinyVODr64i6R7PAltLlygGdahS4Y1JpNT6HLQQTtc7iSZakvMlA1PSq48ohrM3+okWBh21pwMhQTJQCzbikqUN1jSAkZgtbRraRot1C2+kDIncqzZOAUgPPRKKO0C8tS3JSA4CwWIBtx9RwwUtTzFJlJlg7ocA0gFTlKVFyVqCW5jhE87GJTKKaJIITbfIOd7dWL695Lnyi6TjkiUNyS7ZmYQbCWHIosXGT6C+ZFhlohQU2C26FmMJtASp4nSwClMwlIuAQDl4EeIjXD4RCA/xa39Q6f6YqcZtTDFDshdZcJFClBkBO8CN298+eZJOc2hQpS1IFKWdIaljuuwTa7H/AJgd2aFKZnUTlY9b1Pwlkf8AbD7T/wBY03RHpP8AHOs+b6uinyqnqfkOEcdwCJcxUtJnAKWQCAiYopcPkAAT3GN/8Fu6rEpBcAouzOxWHY5d0aa9+YApjD1K5qAPNjPDgujVQohqjyGF00QY5Pj+imIWqbNCBSpSlJNSey5JcZ5R1cxToV+rKsbSzfjunKBVWAieAKWxFFtUAOXJ9qbXmYhMsTS5lilJAAtq/E2ETbA2yMMpSqKqksq7EMSRSeHGKks2d+H4vDQtDCorBq3ml1AIbtDeFR/ht3wsHuzSNVwqbqhfmBv2qXGT61qWwFRJYZBy8RzZSk1FSVCkspwQx0B4HkY8RvKZFR3mSWIUb7pYPSciz2ghcrEKcKVNUFrpUFKUQpaWDKBzIpGeVPKwQAVbWTJdM9iACKu07ZhLlg4DltCWHhDkSEDNINrXNucEKkLSErKSASQCRqkkEegg+ECqWVFzcm+ZGepbUxclZOcayEjh0cBHq5CCbJAHp/GHJUoU2G72blwXdwW43hqpWTcL7yrcudom7VVJ4qKbIGQS9uduVx7vDsHJVW0tBUsg2YEkAabtrCCsChPWJrSSnynWQMjYF/XCxSAJroCQkEGkKUoEgDNRIJEbBKO0wMxNpjW/moJcwpUVKlVqvmtQKVEjfBBzF7G14YFKAG6LOzhJGQ0Ofr0hyJKR5KfAQjKT9EeAiiVg1ToikyFT1kScPSkZIrCqXOVSrl+er5WEDHdqQqSl37T7yWJcABVJfug7ZhCEzFABxQwtfe4PdjfXSJfkmUCXUkAKm5BLMhLhg+ptnGgJuETMCMw1PggpU1IWFLlCcGApUop8lhvJL7tuRpiBaXuQCS72Tnx4RZo2TLdqkv8AM+Slnms4v9GAJ2HQlRACSxN6RoYh7QhuJAg++aWJmJUpVEsSklimW/WXDDtFi11F75s0eTJksJSnqU1BV11K3xoinJH8wvEEtICi3Ow/0+EezyLZ9oN/mKm6sPOaUtoUFfWSpQkj6FZWnO4JIBIPN24szN2fJVMJBAAGe76oleJtiSBMxCEMVJJuAVXZJYBr9x5xpjgTdEp1M7usJROBxPUhSWJ30qLM26FjI/zfgYsV7W6u4+LlXHDUJS24QlmdwRcnO8SzOjyKj80o/wClYBHUO7/zX5sdIzuHwaVFlEAUqVmkXCTZyNSE/hnGzZEJc2Wm06di08/aZky0KImTK0snfUyWCb0moOArNg5JvpAuE2yqYpEsBSbhVQUS1KWFg2nMP6Yz8qUVoX1iyRLQSgPZ6kJDBXImwvuwKlKksQCDmCM+GmUQ1CtGq7MHE+S0y9vkhwlRpSoKUVC4UAkE246ubmA9q7VE6ncKAlRJdVQOQUd2nhoYjOypWTntSA9SMpiXWctNOGrwJj8AEAKSCXUsEFiRSukOANfXElyyc+pMrTbOKJoSgJM1MtKSlPWKFJpAUWTxU5fvjKYjM0mwJ1DNpofdods3aE2QoqlukkUndexvw5QMVKZt6wYZ2F7DhmfGISCAs1Hh4CI6PD5+SsJIdQANaUnmxa3f3jOOifBwfncX/MnV/Kma69+sc+2NKJnSQASygwprs9gJflF3PN433wdAifiwcwUg7tOS5g7Pk92kaabjv9U1QgubHE/6rfgwoaDChldNGmKZKv1U2/dFi+e4YuDFMqVM6hUrqyT1dIYoZ6WuSrjyjL/hPcsOXGCA2d+HLi8eKAbV39DW9ecaNXQrFgfsw/HrEM3BojV0PxTfsw7+cQzd0c/I7gfArz/9LW+VZ1SXt90RDDgMz2yubd3DKNEropih+7H10e2G/otivN/70e2LyvGk81oUMQNAVQS8OAzPbIOWD5sMhEiRZLJZkhJv2iCre5WIHoi6PRjFebH10e2PP0ZxPmx9ZPtiZXHUHmoaFc6tKkTNkFafmxaZKcbjFKpYYHfbeU55akQKiZL6t6Q5lLJO6zmYwN1WYDg/eItF4XaR8pWaVOFSwakdkvyhgwW0WapRFKkMVSzurNSh6VAH0QUtadx8EzsB8rvALOkMWOcKLrF7GxkxZXMTUo5kqQ/3xEej2J83/uR7YHkI4+CVdhak9VphVUJGJCQxkpXvPUZi0umlurZIYB96oX0i1/R/Es3V/wC5HtjwdH8SMpfLtI19MXlcN3Jap0KzDOXxCqTi90p6gXTST1qw5qCqiAGOQtlbLWJFbTJUVdQLqWputX+8Syhlyf1RYHo7ifNf7ke2PT0fxXmtG7UvT0xfX4ckYHED9HJVh2hYDqBlLH7Vf7s308oW5ZhoYvFu56gOa/3qs1KdJy8kWbXMvFqdgYpm6q2fal/mjxPR/FAgiVl/FL/NEOfhyUO3OrOSrZmKSUkJw4SSQyutWqkBnABsXL55Pbl7Lw4KKzMlJ3gkJWoBRfNQBGQs55xYHYGKZuqP1pf5oYro9iT+5P1pf5ootJMws7OoTJZ4CFWYiSHICwoAtUguhXNJIuPREuAJStISjrCSwRfeKrNzzg79H8T5k/Wl/mhDYGKBcSlAjIhcsEdxCrRADOiyKVTMDlMI9eKmgFYwRdVaiWW3zah1hFvJUA/OKLDTkJWCsTCm4PVKSld0kWKra35PFh8iYzzczX94nUufL1Nzxhh6P4rzCvrS/wA0bdmMenoiPFUuBDTbiPRB/G5ATeXiOyiploYqCnmFmyZqXyLu8N+NyH/ZYht9t6Xd+xdrAa8eUHfo9ivMK+tL/NCPR7FeYV9ZH5oz/j5+qn9yL0+SiCsPkE4gdgMTLL+TM0+j2OBiDEdWyRL613W4WQQAVboDasz8TBn6P4t36lT/AMyPzQh0exfmFeKPzRZJiI8/VR22cILOSrSb5ei/CGqUTmX/AMRa/o3i/MK8Ufmh6ei+Lv8Aq6j/AKkW/wB0ZgoGwq/KfBNwuxlnDnEpmBNLkAOFMCxNQyPKNL8F/bnvd0oOb5lR/GKH9GMcE0iTMY3Kak08i1V/CNX8H+xZ0hU0zZZQFJQz03IcnInjG6YIMJ2gxwqN6pAGvfButqIUegQocXURhhphQoipQTIGXChRFFCoQwiPYUUomKERkQoURRNaPCIUKIovCI8aFCiKJNCaFCiKJNCaPIURRetHjQoURRJoa0ewoii8aE0ewoiiTQ4CPIURROAhNChRFa9aHAQoURUpECCJcKFEVolMOhQotRPEKFCiKL//2Q==",
            description:"Printed circuit board (PCB) connectors (more often shortened as PCB connectors) are a type of electrical connector, made up of a housing and contacts which join sections of circuits together on PCB."
        },
        {
            name: "PCB2",
            brand: "PCB2",
            image:"data:image/jpeg;base64,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",
            description:"Printed circuit board (PCB) connectors (more often shortened as PCB connectors) are a type of electrical connector, made up of a housing and contacts which join sections of circuits together on PCB"
            
        },
        {
            name: "MC-8085",
            brand: "MC-8085",
            image: "https://www.elprocus.com/wp-content/uploads/8085-Microprocessor-Architecture-.jpg",
            description:"The 8085 microprocessor has five interrupt inputs.they are TRAP,RST 7.5,RST ... popularly used level converters are MC 1488 & MC 1489 or MAX 232. 13."
        
        },
    ];
    if(authStatus !== 'successful')
    {
        return("You need to login");
    }


    const productUiArr = productsArr ? productsArr.map(product=><ProductView product={product} key={product.id}/>) : ''
    return (
        <>
        <div className="container">
            <div className="row">
                {productUiArr}
            </div>
        </div>
        </>

)
}

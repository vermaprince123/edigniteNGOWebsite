import demoImg from './Images/demo.JPG';
import artcraft from './Images/artcraft.png';
import birthday from './Images/birthday.png';
import bookfair from './Images/bookfair.png';
import bottledis from './Images/bottledis.png';
import careerguid from './Images/careerguid.png';
import children from './Images/children.png';
import classical from './Images/classical.png';
import clothdis from './Images/clothdis.png';
import cycledis from './Images/cycledis.png';
import dance from './Images/dance.png';
import diwali from './Images/diwali.png';
import drawing from './Images/drawing.png';
import dummyshopping from './Images/dummyshopping.png';
import financiallit from './Images/financiallit.png';
import fooddis from './Images/fooddis.png';
import footweardis from './Images/footweardis.png';
import frspen from './Images/frspen.png';
import ganchat from './Images/ganchat.png';
import haryana from './Images/haryana.png';
import independence from './Images/independence.png';
import janmastami from './Images/janmastami.png';
import maskdis from './Images/maskdis.png';
import movie from './Images/movie.png';
import parentawar from './Images/parentawar.png';
import popcornmak from './Images/popcornmak.png';
import rakshabandhan from './Images/rakshabandhan.png';
import ramnavmi from './Images/ramnavmi.png';
import scicenter from './Images/scicenter.png';
import selfdef from './Images/selfdef.png';
import singing from './Images/singing.png';
import stationerydis from './Images/stationerydis.png';
import student from './Images/student.png';
import sweaterdis from './Images/sweaterdis.png';
import upscsess from './Images/upscsess.png';
import youngsci from './Images/youngsci.png';

const ActivityList = [

    {
        "id": 1,
        "actName": "Distributions",
        "description": "We try to meet overall needs of the children by conducting several distribution drives like Stationery, Food, Cloth, Footwear, Bottle, Sweater, etc",
        "subAct": [
            {
                "id": 1,
                "srcImg": clothdis,
                "name": "Cloth Distribution"
            },
            {
                "id": 2,
                "srcImg": fooddis,
                "name": "Food Distribution"
            },
            {
                "id": 3,
                "srcImg": sweaterdis,
                "name": "Sweater Distribution"
            },
            {
                "id": 4,
                "srcImg": stationerydis,
                "name": "Stationery Distribution"
            },
            {
                "id": 5,
                "srcImg": bottledis,
                "name": "Bottle Distribution"
            },
            {
                "id": 6,
                "srcImg": cycledis,
                "name": "Cycle Distribution"
            },
            {
                "id": 7,
                "srcImg": footweardis,
                "name": "Footwear Distribution"
            },
            {
                "id": 8,
                "srcImg": maskdis,
                "name": "Sanitizer and Mask Distribution"
            }
        ]
    },
    {
        "id": 2,
        "actName": "Celebrations",
        "description": "We celebrate several festivals with the kids, and teach them their significance. Along with festivals several people including volunteers celebrate their birthdays with these little kids",
        "subAct": [
            {
                "id": 1,
                "srcImg": haryana,
                "name": "Haryana Divas"
            },
            {
                "id": 2,
                "srcImg": student,
                "name": "Student Day"
            },
            {
                "id": 3,
                "srcImg": janmastami,
                "name": "Janmastami"
            },
            {
                "id": 4,
                "srcImg": ganchat,
                "name": "Ganesh Chaturthi"
            },
            {
                "id": 5,
                "srcImg": independence,
                "name": "Independence Day"
            },
            {
                "id": 6,
                "srcImg": rakshabandhan,
                "name": "Rakshabandhan"
            },
            {
                "id": 7,
                "srcImg": ramnavmi,
                "name": "Ramnavmi"
            },
            {
                "id": 8,
                "srcImg": children,
                "name": "Children's Day"
            },
            {
                "id": 9,
                "srcImg": birthday,
                "name": "Birthday Celebration"
            },
            {
                "id": 10,
                "srcImg": diwali,
                "name": "Diwali Celebration"
            },
        ]
    },
    {
        "id": 3,
        "actName": "Visits and Competitions",
        "description": "For overall development of kids, we conduct several visits to Book Fair, Shopping Center, Science Center, etc. We also make them participate in various co-curricular Competitions such as dance, singing, drawing, etc",
        "subAct": [
            {
                "id": 1,
                "srcImg": bookfair,
                "name": "Book Fair Visit"
            },
            {
                "id": 2,
                "srcImg": upscsess,
                "name": "UPSC Session Visit"
            },
            {
                "id": 3,
                "srcImg": scicenter,
                "name": "Science Center Visit"
            },
            {
                "id": 4,
                "srcImg": dance,
                "name": "Dance Competition"
            },
            {
                "id": 5,
                "srcImg": singing,
                "name": "Singing Competition"
            },
            {
                "id": 6,
                "srcImg": drawing,
                "name": "Drawing Competition"
            },
            {
                "id": 7,
                "srcImg": youngsci,
                "name": "Young Scientist Competition"
            },
            {
                "id": 8,
                "srcImg": classical,
                "name": "Classical Programme Visit"
            },
            {
                "id": 9,
                "srcImg": selfdef,
                "name": "Self Defence Workshop"
            }
        ]
    },
    {
        "id": 4,
        "actName": "Awareness Sessions and Workshops",
        "description": "We organize several awareness sessions regarding parenting, women hygiene, career guidance. Apart from these we have been organizing Workshops and Bootcamps on several skill, both for the kids as well as college going students.",
        "subAct": [
            {
                "id": 1,
                "srcImg": parentawar,
                "name": "Awareness Session on parenting"
            },
            {
                "id": 2,
                "srcImg": careerguid,
                "name": "Career Guidance Sessions"
            },
            {
                "id": 3,
                "srcImg": financiallit,
                "name": "Financial Literacy Workshop"
            },
            {
                "id": 4,
                "srcImg": frspen,
                "name": "English, French, and Spanish Workshop"
            },
        ]
    },
    {
        "id": 5,
        "actName": "Other Activities",
        "description": "We also organize several other co-curricular activities to ensure overall development of kids. Some of which include: -",
        "subAct": [
            {
                "id": 1,
                "srcImg": popcornmak,
                "name": "Popcorn Making - Best out of waste"
            },
            {
                "id": 2,
                "srcImg": artcraft,
                "name": "Art And Craft"
            },
            {
                "id": 3,
                "srcImg": dummyshopping,
                "name": "Dummy Shopping Centre"
            },
            {
                "id": 4,
                "srcImg": movie,
                "name": "Movie Time"
            },
        ]
    },

]

export default ActivityList
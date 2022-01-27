import "./movieDetails.scss"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { AccessTimeOutlined, Style } from "@material-ui/icons"

export default function Download() {

    return (
        <div>
            <Navbar/>
            <div className="main-content">
                <div className="content">
                    <h1 class="post-title">
                        <span>Avengers Endgame (2019) Sinhala Subtitles | අවසන් සටන | සිංහල උපසිරැසි සමග |</span>
                    </h1>
                    <span className="tie-date">
                        <AccessTimeOutlined className="access"/><span className="post-time">4 days ago</span>
                    </span>
                    <span className="tags"><Style/>Action, Romance</span>
                    <div className="post-img">
                            <img src="https://cineru.lk/wp-content/uploads/2019/04/49-660x330.jpg" alt="" height={330} width={660}/>
                    </div>
                    <span className="desc">
                        ඔන්න හා හා පුරා කියලා මේ මස තිරගත වෙන්න ගත්ත ලෝකයේ අවදානය දිනාගත්ත සලරුවක උපසිරසක තමා අද ගෙනවේ. ගොඩක් අය මග බාලාගෙන සිටි මේක ඉතාම සුපිරි ගනයේ සලරුවක්.වෙන මොනවත් නෙවෙයි මෙය අප්‍රේල් 26 වන දින සිට තිරගත වෙන්න ගත්ත කවුරුත් අවදානය ගත්ත Avengers: Endgame වචනයෙ පරිසමාර්ත අර්තයෙන්ම අන්තිම සටනක් මේක . මෙය imbd 9/10 අගයක්ද ,කුනු තක්කාලි 95% අගයක්ද ලබාගෙන තියෙනවා.
                    </span>
                    <span className="download-btn">
                        <button>
                        සිංහල උපසිරැසි <span>| 150 |</span>
                        </button>
                    </span>
                </div>
                <aside className="sidebar">
                    <span className="ads1">
                        <img src="https://icon-library.com/images/ad-icon-png/ad-icon-png-25.jpg" alt=""></img>
                    </span>
                    <span className="ads2">
                        <img src="https://icon-library.com/images/ad-icon-png/ad-icon-png-25.jpg" alt=""></img>
                    </span>
                </aside>
            </div>
            <Footer/>
        </div>
    )
}

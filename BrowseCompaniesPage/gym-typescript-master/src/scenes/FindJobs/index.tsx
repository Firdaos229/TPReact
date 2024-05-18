import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="browsecompanies" className="gap-16 bg-white py-10 md:h-full md:pb-0">
      <div>
      <div>
        <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '25vh', // Ajustez la hauteur selon vos besoins
    }}>
        <div> <h2>
    <span style={{
      fontFamily: 'Clash Display Variable',
      fontSize: '50px',
      fontWeight: 600,
      lineHeight: '52,8px',
      textAlign: 'center',
      // Ajoutez d'autres styles ici si nécessaire
    }}>
    Find your {}
      </span>
      <div style={{
  display: 'inline-block', // Pour que le conteneur s'adapte à la largeur du texte
  backgroundImage: 'linear-gradient(to right,transparent, #26A4FF, #26A4FF, transparent)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 100%',
  backgroundSize: '100% 2px',
  fontFamily: 'Clash Display Variable',
  fontSize: '35px',
  fontWeight: 600,
  lineHeight: '52.8px',
  textAlign: 'center',
  color: '#26A4FF', // Couleur du texte bleue
}}>
  dream companies
</div>
</h2>
<div style={{
  fontFamily: 'Epilogue',
  fontSize: '15px',
  fontWeight: 400,
  lineHeight: '28.8px',
  textAlign: 'center',
  color: '#515B6F', // Couleur du texte
}}>
  Find the dream companies you dream work for
</div>
</div>

  </div>
 

  <div className="mt-8 bg-white-color py-4 px-3 " style={{ width: '100vw' }}>
  {/* Conteneur pour l'icône et l'input */}
  
    <input 
      className="w-22 px-10 py-2 shadow-lg mr-5" 
      type="text" 
      placeholder="Job title or keyword"
    />
  <select className="w-22 rounded-md px-10 py-2 shadow-lg mr-5">
    <option value="Florence,Italy">Florence,Italy</option>
    <option value="Florence,Italy">Quebec,Canada</option>
  </select>
  
  <ActionButton setSelectedPage={setSelectedPage}>
    Search my
  </ActionButton>
</div>
<div className="mt-1 text-sm py-1 px-2">
      Polpular:Twitter,Microsoft,Apple,Facebook
    </div>
</div>
    </div>
    <div style={{
  fontFamily: 'Epilogue',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '25.6px',
  textAlign: 'left',
}}>
  
</div>

            
          
        

      
    </section>
  );
};

export default Home;

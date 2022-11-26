import HotelIcon from '@mui/icons-material/Hotel';
import BathroomIcon from '@mui/icons-material/Bathroom';
import KitchenIcon from '@mui/icons-material/Kitchen';
import VideocamIcon from '@mui/icons-material/Videocam';
import { fontSize } from '@mui/system';

const Facilities = ({ facilities, fsize = '30px' }) => {
  return (
    <div className="property-facilities">
      <h2>Facilities: </h2>
      <h1>
        {facilities?.map((f) => {
          return (
            <div className="property-facilities-item">
              {f?.bedroom && (
                <div>
                  <HotelIcon color="primary" sx={{ fontSize: fsize }} />
                  <span>{f?.bedroom}|</span>
                </div>
              )}
              {f?.bathroom && (
                <div>
                  <BathroomIcon color="primary" sx={{ fontSize: fsize }} />
                  <span>{f?.bathroom}|</span>
                </div>
              )}
              {f?.kitchen && (
                <div>
                  <KitchenIcon color="primary" sx={{ fontSize: fsize }} />
                  <span>{f?.kitchen}|</span>
                </div>
              )}
              {f?.cctv && (
                <div>
                  <VideocamIcon color="primary" sx={{ fontSize: fsize }} />
                  <span>{f?.cctv}|</span>
                </div>
              )}
            </div>
          );
        })}
      </h1>
    </div>
  );
};

export default Facilities;

import MapView from "esri/views/MapView";
import { FC, useEffect, useRef } from "react";
import { loadModules } from 'esri-loader';



const Map: FC = () => {

 

    const MapEl = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
  
      let view: MapView | null;
  
      loadModules(["esri/views/MapView", "esri/WebMap"], {
        css: true
      }).then(([MapView, WebMap]) => {
        const webmap = new WebMap({
          basemap: 'streets-vector'
        })
        view = new MapView({
          map: webmap,
          center: [23.321590139866355, 42.697866831005435],
          zoom: 12,
          container: MapEl.current
        })
  
      })
  
      return () => {
        if (!!view) {
          view.destroy()
          view = null
        }
      }
  
    }, [])
  
  
  
    return (
      <div className='map' ref={MapEl} style={{ width: '75%', height: '400px', margin: '10px', padding: '0' }}>
      </div>
    );
  }
  
  export default Map;


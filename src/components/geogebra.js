import React from "react"

export const GeoGeBra = (props) => {

  if (typeof window != 'undefined') {

    var ggbApp = new window.GGBApplet({
      "appName": "geometry",
      "useBrowserForJS": true,
      "width": props.content_width,
      "height": props.content_height,
      "scale": props.scale ? props.scale : 1.0,
      "material_id": props.material_id,
      "showToolBar": false,
      "showAlgebraInput": false,
      "showMenuBar": false,
      "enableRightClick": false,
      "enable3d": false,
      "autoHeight": true,
      "enableCAS": "none"
    }, true);
    ggbApp.inject(props.material_id);
  }

  let view_width = props.width ? props.width : props.content_width;
  let view_height = props.height ? props.height : props.content_height;

  if (props.scale) {
    view_width = props.content_width * props.scale;
    view_height = props.content_height * props.scale;
  }

  return <div id={props.material_id} className="geogebra" style={{ width: view_width, height: view_height }} />
}

export default GeoGeBra
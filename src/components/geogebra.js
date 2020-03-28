import React from "react"

export const GeoGeBra = (props) => {

  if (typeof window != 'undefined') {

    var ggbApp = new window.GGBApplet({
      "appName": "graphing",
      "width": props.content_width,
      "height": props.content_height,
      "showToolBar": false,
      "showAlgebraInput": false,
      "showMenuBar": false,
      "material_id": props.material_id
    }, true);
    ggbApp.inject(props.material_id);
  }

  return <div id={props.material_id} className="geogebra" style={{ width: props.width, height: props.height }} />
}

export default GeoGeBra
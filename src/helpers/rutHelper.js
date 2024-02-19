class RutHelper {
  formatCleaned(rutObject) {
    let stringRut = this.clearFormat(rutObject);
    let rutDV = stringRut.charAt(stringRut.length - 1);
    let rut = stringRut.substring(0, stringRut.length - 1);
    let rutFormatted = this._format(stringRut);

    return {
      rut: rut,
      dv: rutDV,
      rutFormatted: rutFormatted
    };
  }

  clearFormat(rut) {
    let strRut = new String(rut);
    while (strRut.indexOf(".") != -1) {
      strRut = strRut.replace(".", "");
    }
    while (strRut.indexOf("-") != -1) {
      strRut = strRut.replace("-", "");
    }

    return strRut;
  };

  _format(Rut) {
    let sRut = new String(Rut);
    let sRutFormatted = '';
    sRut = this.clearFormat(sRut);
    let sDV = sRut.charAt(sRut.length - 1);
    sRut = sRut.substring(0, sRut.length - 1);
    while (sRut.length > 3) {
      sRutFormatted = "." + sRut.substr(sRut.length - 3) + sRutFormatted;
      sRut = sRut.substring(0, sRut.length - 3);
    }
    sRutFormatted = sRut + sRutFormatted;
    if (sRutFormatted != "") {
      sRutFormatted += "-" + sDV;
    }

    return sRutFormatted;
  };
}

module.exports = new RutHelper();

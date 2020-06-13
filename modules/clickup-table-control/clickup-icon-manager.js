const ICONS = {
  'insertColumnLeft': '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#595959" d="M380.342857 336.457143h526.811429v43.885714H380.342857z m0 307.2h526.811429v43.885714H380.342857zM643.657143 117.028571h43.885714v789.942858h-43.885714zM204.8 73.142857h614.582857A131.474286 131.474286 0 0 1 950.857143 204.8v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.657143 131.657143 0 0 1 204.8 73.142857z m0 43.885714a87.588571 87.588571 0 0 0-87.588571 87.771429v614.4a87.588571 87.588571 0 0 0 87.588571 87.771429h614.582857a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM204.8 73.142857A131.657143 131.657143 0 0 0 73.142857 204.8v614.4a131.657143 131.657143 0 0 0 131.657143 131.657143h219.428571V73.142857z m131.84 460.8h-65.828571v65.828572h-43.885715v-65.828572h-65.828571v-43.885714h65.828571v-65.828572h43.885715v65.828572h65.828571z" /></svg>',
  'insertColumnRight': '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#595959" d="M73.142857 336.64h526.628572v43.885714H73.142857zM73.142857 643.657143h526.628572v43.885714H73.142857zM336.457143 117.028571h43.885714v789.942858h-43.885714zM204.8 73.142857h614.4a131.657143 131.657143 0 0 1 131.657143 131.657143v614.4a131.657143 131.657143 0 0 1-131.657143 131.657143H204.8A131.657143 131.657143 0 0 1 73.142857 819.2V204.8A131.84 131.84 0 0 1 204.8 73.142857z m0 43.885714a87.771429 87.771429 0 0 0-87.771429 87.771429v614.4a87.771429 87.771429 0 0 0 87.771429 87.771429h614.4a87.771429 87.771429 0 0 0 87.771429-87.771429V204.8a87.771429 87.771429 0 0 0-87.771429-87.771429zM819.2 73.142857h-219.428571v877.714286h219.428571a131.657143 131.657143 0 0 0 131.657143-131.657143V204.8A131.84 131.84 0 0 0 819.2 73.142857z m44.068571 460.982857h-65.828571v65.828572H753.371429v-65.828572h-65.828572V490.057143h65.828572v-65.828572h44.068571v65.828572h65.828571z" /></svg>',
  'deleteColumn': '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#595959" d="M925.996 99.038c-25.47-25.6-60.121-39.822-96.323-39.822H194.198c-75.12 0.13-136.016 61.026-136.145 136.146v635.345c0 36.073 14.351 70.723 39.822 96.323 25.6 25.73 60.25 40.081 96.323 40.081h635.475c36.072 0 70.723-14.351 96.323-39.951 25.6-25.6 39.951-60.122 39.951-96.324V195.362c0-36.073-14.351-70.724-39.951-96.324z m-365.77 494.287L512 545.228l-48.226 48.097-32.194-31.935 48.355-48.226-48.226-48.097 32.194-32.194L512 480.97l48.097-48.097 32.194 32.194-48.097 48.097 48.226 48.226-32.194 31.935zM103.434 195.362c0-24.049 9.568-47.192 26.635-64.13 17.066-17.066 40.08-26.634 64.129-26.634h136.145v226.91H103.434V195.361z m0 181.656h226.91V649.31h-226.91V377.02z m90.764 544.84c-24.049 0-47.192-9.567-64.13-26.634-17.066-17.066-26.634-40.08-26.634-64.258V694.69h226.91v227.168H194.197z m726.238-90.763c0 24.048-9.438 47.192-26.505 64.259-17.066 17.066-40.21 26.634-64.258 26.505H693.527V694.69h226.91v136.404z m0-181.786H693.527V377.02h226.91v272.29zM693.527 331.507V104.598h136.146c24.048 0 47.192 9.438 64.258 26.505 17.067 17.067 26.635 40.21 26.505 64.259v136.145H693.527z" /></svg>',
  'delete': '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="20px" height="20.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#595959" d="M764.42168889 830.5152c0 30.23530667-24.61013333 54.84430222-54.84316444 54.84430222H314.42147555c-30.23416889 0-54.84316445-24.61013333-54.84316444-54.84430222V248.32796445h504.84337778v582.18723555zM369.26577778 149.89084445c0-6.32832 4.92202667-11.25034667 11.25034667-11.25034667H644.18702222c6.32832 0 11.25034667 4.92202667 11.25034667 11.25034667v33.04675555H369.26577778V149.89084445z m559.68768 33.04675555H720.82773333V149.89084445c0-42.1888-34.45191111-76.64071111-76.64071111-76.64071112H380.51612445c-42.1888 0-76.64071111 34.45191111-76.64071112 76.64071112v33.04675555h-208.82773333c-18.28181333 0-33.04789333 14.76608-33.04789333 33.04675555s14.76608 33.04675555 33.04675555 33.04675556h98.43825778v581.48408889c0 66.79779555 54.14001778 120.93781333 120.93667555 120.93781333h395.1570489c66.79665778 0 120.93667555-54.14001778 120.93667555-120.93781333V248.32796445h98.43825778c18.28067555 0 33.04675555-14.76494222 33.04675555-33.04675556s-14.76608-32.34360889-33.04675555-32.34360889zM512 786.21923555c18.28181333 0 33.04675555-14.76608 33.04675555-33.04789333v-351.56195555c0-18.28181333-14.76494222-33.04675555-33.04675555-33.04675556s-33.04675555 14.76494222-33.04675555 33.04675556v351.56195555c0 18.28181333 14.76494222 33.04789333 33.04675555 33.04789333m-153.98456889 0c18.28181333 0 33.04675555-14.76608 33.04675556-33.04789333v-351.56195555c0-18.28181333-14.76494222-33.04675555-33.04675556-33.04675556s-33.04675555 14.76494222-33.04675556 33.04675556v351.56195555c0.70314667 18.28181333 15.46922667 33.04789333 33.04675556 33.04789333m307.96913778 0c18.28067555 0 33.04675555-14.76608 33.04675556-33.04789333v-351.56195555c0-18.28181333-14.76608-33.04675555-33.04675556-33.04675556s-33.04675555 14.76494222-33.04675556 33.04675556v351.56195555c0 18.28181333 14.76494222 33.04789333 33.04675556 33.04789333" /></svg>',
  'deleteSmall': '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1592065784010" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3321" width="12" height="12" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"></style></defs><path d="M359.9872 184.0128h-7.9872c4.4032 0 7.9872-3.584 7.9872-7.9872v7.9872h304.0256v-7.9872c0 4.352 3.584 7.9872 7.9872 7.9872h-7.9872V256h71.9872V175.9744c0-35.2768-28.672-64-64-64h-320c-35.328 0-64 28.7232-64 64V256h71.9872V184.0128zM864 256H160a31.9488 31.9488 0 0 0-32 32v32c0 4.4032 3.584 7.9872 7.9872 7.9872h60.416l24.6784 523.008a64.0512 64.0512 0 0 0 63.8976 61.0304h454.0416c34.2016 0 62.2592-26.8288 63.8976-61.0304l24.6784-523.008h60.416c4.4032 0 7.9872-3.584 7.9872-7.9872v-32A31.9488 31.9488 0 0 0 864 256z m-132.7104 583.9872H292.7104l-24.2176-512h487.0144l-24.2176 512z" opacity=".65" p-id="3322"></path></svg>'
}

export default class IconManager {
  getSvgIcon(key) {
    return ICONS[key]
  }
}
import React from 'react';
import './Home.css';
import lineaCurva from '../../assets/img/lineaCurva.png';
import logo from '../../assets/img/logo.png';
import analisis from '../../assets/icons/analisis.png';
import planificacion from '../../assets/icons/planificacion.png';
import diseno from '../../assets/icons/diseno.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import comprobacion from '../../assets/icons/comprobacion.png';
import imagen2 from '../../assets/img/imagen2.png';
import imagen3 from '../../assets/img/imagen3.png';
import imagen4 from '../../assets/img/imagen4.png';
import imgFooter from '../../assets/img/imgFooter.png';
import ReactPlayer from 'react-player';

const Home = () => {

  function abrirWhatsApp() {
    window.open('https://wa.me/3142099202', '_blank');
  }


  return (
    <div className="contenedorTotal">
      <div className="contenedorLogo">
        <img src={logo} alt="logo de la empresa" className="logoEmpresa" />
      </div>
      <div className="contenedorGeneral">
        <div className="seccionPrincipal">
          <div className="contenedorSeccion">
            <h1 className="textoSeccion">SOFTWARE DEVELOPMENT COMPANY</h1>
          </div>
        </div>
        <div className="contenedorDosSecciones">
          <div className="primeraSeccion">
            <img src={lineaCurva} alt="linea curva" className="imagenCurva" />
            <p className="texto">
              Especialistas en Desarrollo de Proyectos, WebApps y Web. Ofrecemos
              Soluciones para Empresas: Integración API. Los sistemas ya no
              están aislados, por ello, integrar una API puede colocar una
              empresa o un negocio en otro nivel. Las APIs son una puerta al
              mundo, la entrada a nuevos mercados, una vitrina hacia personas y
              empresas en el exterior. Las empresas pioneras en innovación deben
              gran parte de su músculo creativo a una o varias APIs. En CODE E -
              COM somos expertos en integraciones con sistemas externos: CRM,
              ERP, API REST, MicroServicios, WebServices. Nos dedicamos al
              desarrollo de webs y apps multiplataforma en los sistemas iOS y
              Android, con proyectos propios y también ad hoc.
            </p>
          </div>
          <div className="segundaSeccion">
            <img src={lineaCurva} alt="linea curva" className="imagenCurva" />
            <p className="texto">
              No solo trabajamos en el desarrollo de Apps sino también sobre el
              diseño y desarrollo de aplicaciones Web y sus respectivas APIs.
              Especializados en programación avanzada y a medida, para mejorar
              procesos de trabajo, tanto a nivel industrial como para el pequeño
              comercio, incluyendo también tanto el desarrollo de apps como el
              lanzamiento y posicionamiento de las aplicaciones, Software para
              smartphones, tablets y web. Somos una agencia de desarrollo de
              webs y apps en Bogotá - Colombia aunque realizamos trabajos en
              todo el mundo.
            </p>
          </div>
        </div>
      </div>
      <div className="contenedorSecciones">
        <div className="tituloSecciones">
          <h2 className="textoTitulo">TECNOLOGIA QUE GENERA RESULTADOS</h2>
          <div className="contenedorBoton">
            <a className="boton" href="#seccion-destino">Quiero consultar</a>
          </div>
        </div>
        <div className="contenedorPrincipal">
          <div className="primerasSecciones">
            <div className="seccionUno">
              <img src={analisis} alt="icono analisis" className="icon" />
              <h3 className="seccionUno-tituloUno">DESARROLLO WEB</h3>
              <p className="parrafoSeccionUno">
                Tenemos experiencia comprobable en desarrollo de proyectos web y
                API. Imprimimos a nuestros proyectos flexibilidad necesaria para
                garantizar su crecimiento, rendimiento y estabilidad, brindando
                la confianza suficiente para que los proyectos persistan
                estables en el tiempo. Generamos el cambio que necesitas para
                potenciar tu negocio.
              </p>
            </div>
            <div className="seccionDos">
              <img src={planificacion} alt="icono" className="icon" />
              <h3 className="seccionUno-tituloDos">DESARROLLO DE APPS</h3>
              <p className="parrafoSeccionDos">
                Evaluamos las necesidades de cada proyecto dando como resultado
                una aplicación móvil óptima en calidad y rendimiento. Esto es
                posible gracias a la gran dedicación de nuestro equipo que
                aporta todo su conocimiento y compromiso durante el desarrollo
                de los proyectos apps. Además, gracias a nuestra experiencia
                profesional y de forma opcional, podemos asesorar desde el
                inicio del proyecto para que la experiencia de uso del usuario
                final sea sencilla y muy positiva.
              </p>
            </div>
          </div>
          <div className="segundasSecciones">
            <div className="seccionTres">
              <img src={diseno} alt="icono" className="icon" />
              <h3 className="seccionUno-tituloTres">SOFTWARE SERVICE</h3>
              <p className="parrafoSeccionDos">
                Desarrollamos e implementamos de manera ágil software a la
                medida para resolver las necesidades de su empresa. Contamos con
                gran experiencia en desarrollo de software que nos da la
                flexibilidad para poder brindar soluciones que se adaptan a las
                necesidades específicas de nuestros clientes. Contribuimos con
                la sostenibilidad de tu negocio, implementamos e integramos
                soluciones tecnológicas convirtiéndonos en tu socio estratégico.
                Trabajamos con un enfoque ágil y tenemos un nivel de atención
                competitivo sobre el mercado.
              </p>
            </div>
            <div className="seccionCuatro">
              <img src={comprobacion} alt="icono" className="icon" />
              <h3 className="seccionUno-tituloCuatro">EQUIPO</h3>
              <p className="parrafoSeccionDos">
                Cada uno de los miembros de nuestra organización cuenta con
                criterios de innovación, creatividad y adaptación. Nuestro
                crecimiento ha sido lento pero constante, acumulando talento
                profesional comprometido con la continua evolución de las
                tecnologías y con la renovación constante de conocimientos. Cuyo
                crecimiento se traslada en beneficio de nuestros clientes,
                materializando las ideas en proyectos satisfactorios de calidad
                con la aplicación de tecnologías de punta. Aceptamos solicitudes
                de postulación de perfiles para quienes deseen formar parte de
                nuestra familia CODE e-com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedorVideo">
        <div className="video">
          <ReactPlayer
            url={require("../../videos/Programador.mp4")}
            width="100%"
            height="100%"
            //controls
            playing
            loop
          />
        </div>
      </div>
      <div>
        <div className="contenedorTituloInfo">
          <h3 className="tituloInfo">¿Por que nosotros?</h3>
          <div className="contenedorParrafo">
            <p className="parrafoTituloInfo">
              Porque nos especializamos en crear soluciones multiplataforma para
              iOS y Android. Además de nuestra capacidad en el desarrollo de
              apps, también porque nos enfocamos en el diseño y desarrollo de
              aplicaciones web y sus APIs. Nuestro equipo de programadores
              expertos en programación avanzada y a medida mejora procesos de
              trabajo en distintos sectores, incluyendo el lanzamiento y
              posicionamiento de aplicaciones. Nuestra experiencia nos permite
              ofrecer soluciones completas y personalizadas, siempre a la
              vanguardia de la tecnología e innovación.
            </p>
          </div>
        </div>
        <div className="contenedorInfoAdicional">
          <div className="contenedorSubSecciones">
            <div className="contenedorImgUno">
              <img src={imagen2} alt="imagen2" className="fotoUno" />
              <h3 className="tituloTextos">EXPERIENCIA</h3>
              <p className="parrafos">
                Somos una empresa colombiana joven, comprometida con la
                industria tecnológica en brindar herramientas para ofrecer
                soluciones integrales y consultoría optimizando sus procesos y
                desarrollando aplicaciones a la medida de las necesidades que
                los clientes demandan.
              </p>
            </div>
            <div className="contenedorImgDos">
              <img src={imagen3} alt="imagen3" className="fotoDos" />
              <h3 className="tituloTextos">VISION DE NEGOCIO</h3>
              <p className="parrafos">
                Queremos ser la empresa de servicios tecnológicos más admirada
                por su compromiso, flexibilidad e innovación con alto impacto en
                los clientes, en nuestro equipo y en la sociedad. Para ello,
                integramos en nuestro trabajo los ejes de procesos, tecnologías
                y estrategia
              </p>
            </div>
            <div className="contenedorImgTres">
              <img src={imagen4} alt="imagen4" className="fotoTres" />
              <h3 className="tituloTextos">PROPUESTA DE VALOR</h3>
              <p className="parrafos">
                Altos estándares de calidad / Flexibilidad y sensibilidad con el
                usuario / Contamos con estructura multidisciplinaria de expertos
                profesionales que nos permite estar a la vanguardia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedorFormulario">
        <form className="form" onSubmit={() => {}}>
          <h2 className="tituloFormulario" id="seccion-destino">Formulario de Contacto</h2>
          <div className="contenedorCampos">
            <div className="contenedorNombre">
              <p className="nombre">Nombre</p>
              <input
                className="inputNombre"
                placeholder="Nombre"
                type="text"
                onChange={() => {}}
              />
            </div>
            <div className="contenedorTelefono">
              <p className="telefonoInput">Telefono</p>
              <input
                className="inputTelefono"
                placeholder="Telefono"
                type="text"
                onChange={() => {}}
              />
            </div>
            <div className="contenedorEmail">
              <p className="email">Email</p>
              <input
                className="inputEmail"
                placeholder="Email"
                type="email"
                onChange={() => {}}
              />
            </div>
            <div className="contenedorMensaje">
              <p className="mesaje">Mensaje</p>
              <div>
                <textarea
                  className="textArea"
                  placeholder="mensaje"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="enviar">
            <button className="botonEnviar" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="contenedorFooter">
        <div>
          <img src={imgFooter} alt="logo footer" className="logoFooter" />
        </div>
        <div className="infoFooter">
          <h3 className="tituloFooter">CONTACTO</h3>
          <button onClick={abrirWhatsApp} className='botonWhatsapp'>
            <img src={whatsapp} alt="icono" className="whatsapp" />
          </button>
          <p className="textoFooter">davidpinillame1995@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

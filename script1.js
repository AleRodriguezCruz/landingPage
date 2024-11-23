<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sella Lumitech</title>
    <link rel="stylesheet" href="style.css"> <!-- Vinculación del CSS -->
</head>
<body class="is-boxed has-animations">
    <div class="body-wrap">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
                            <a href="#">
                                <svg width="28" height="32" xmlns="http://www.w3.org/2000/svg">
                                    <!-- Contenido SVG -->
                                    <defs>
                                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
                                            <stop stop-color="#00BFFB" offset="0%" />
                                            <stop stop-color="#0270D7" offset="100%" />
                                        </linearGradient>
                                        <!-- Otros gradientes -->
                                    </defs>
                                    <!-- Resto del SVG -->
                                </svg>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="container">
                    <div class="hero-inner">
                        <div class="hero-copy">
                            <h1 class="hero-title mt-0">Plantilla de aterrizaje para startups</h1>
                            <p class="hero-paragraph">¡Bienvenido a tu futuro! Nuestra plantilla de página de aterrizaje.</p>
                            <div class="hero-cta">
                                <a class="button button-primary" href="#">Pre-ordena ahora</a>
                                <a class="button" href="#">Contáctanos</a>
                            </div>
                        </div>
                        <div class="hero-figure anime-element">
                            <!-- Placeholder para figura hero -->
                            <svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
                                <rect width="528" height="396" style="fill:transparent;" />
                            </svg>
                            <!-- Figuras hero -->
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className={`hero-figure-box hero-figure-box-0${index + 1}`} data-rotation={`${index * 10 - 50}deg`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section class="features section">
                <div class="container">
                    <div class="features-inner section-inner has-bottom-divider">
                        <div class="features-wrap">

                            {/* Elemento de característica */}
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className={`feature text-center is-revealing`}>
                                    <div className={`feature-inner`}>
                                        {/* Icono de característica */}
                                        {/* Reemplaza con el SVG correspondiente */}
                                        {/* Icono de marcador de posición */}
                                        <svg width={112} height={100} xmlns='http://www.w3.org/2000/svg'>
                                            {/* Contenido SVG aquí */}
                                        </svg>

                                        {/* Título y descripción de la característica */}
                                        <h4 className='feature-title mt-24'>Sé Productivo</h4>
                                        <p className='text-sm mb-0'>¡Bienvenido a tu futuro! Nuestra plantilla de página de aterrizaje está diseñada para funcionar sin problemas en cualquier dispositivo, asegurando que tu contenido siempre se vea impresionante. Configúralo una vez y disfruta de resultados hermosos durante toda la vida.</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

        </main>

        <!-- Footer u otras secciones pueden ser añadidas aquí -->

    </div>

    <!-- Vinculación del JavaScript -->
    <script src="script.js"></script> 
</body>
</html>

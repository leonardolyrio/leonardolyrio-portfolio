import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reseta o scroll nativo do navegador
    window.scrollTo(0, 0);

    // Se o Lenis estiver disponível globalmente ou via janela,
    // forçamos o scroll para o topo.
    // Como o Lenis no App.tsx é instanciado localmente no useEffect,
    // o window.scrollTo(0,0) costuma ser suficiente, mas
    // forçamos o scroll imediato para evitar saltos.
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;

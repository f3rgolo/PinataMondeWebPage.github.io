/**
 * PIÑATA MONDE - LÓGICA INTERACTIVA Y GENERADOR WHATSAPP
 * Zapopan, Jalisco · Hecho a Mano
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_PHONE = '523312633202';

  /* ==========================================================================
     1. FILTRO DE CATEGORÍAS EN PINATAS.HTML (IMAGE 1 SPEC)
     ========================================================================== */
  const categoryFilterBtns = document.querySelectorAll('.catalog-filter-btn');
  const pinataRows = document.querySelectorAll('.pinata-row');

  if (categoryFilterBtns.length > 0 && pinataRows.length > 0) {
    categoryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        pinataRows.forEach(row => {
          row.classList.remove('is-expanded');

          const rowCategory = row.getAttribute('data-category') || '';
          if (filterValue === 'all' || rowCategory === filterValue) {
            row.style.display = 'grid';
            setTimeout(() => {
              row.style.opacity = '1';
            }, 20);
          } else {
            row.style.opacity = '0';
            row.style.display = 'none';
          }
        });
      });
    });
  }

  /* ==========================================================================
     2. BUSCADOR EN VIVO DE PIÑATAS Y PERSONAJES
     ========================================================================== */
  const catalogSearchInput = document.getElementById('catalogSearchInput');

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      pinataRows.forEach(row => {
        row.classList.remove('is-expanded');
        const rowTitle = row.getAttribute('data-title') || '';
        const rowCategory = row.getAttribute('data-category') || '';
        const allCardTitles = Array.from(row.querySelectorAll('.pinata-title')).map(t => t.textContent.toLowerCase()).join(' ');

        const isMatch = query === '' || 
                        rowTitle.includes(query) || 
                        rowCategory.includes(query) || 
                        allCardTitles.includes(query);

        if (isMatch) {
          row.style.display = 'grid';
          row.style.opacity = '1';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

  /* ==========================================================================
     3. CONTROL PRECISO DE DESPLIEGUE, RETRACCIÓN POR ESPACIO VACÍO Y BOTÓN
     ========================================================================== */
  const multiVariantTriggers = document.querySelectorAll('.multi-variant-trigger');

  multiVariantTriggers.forEach(trigger => {
    const parentRow = trigger.closest('.pinata-row');
    if (!parentRow) return;

    // Desktop: Despliega cuando el cursor entra en la tarjeta de Slot 1 (si no está bloqueada)
    trigger.addEventListener('mouseenter', () => {
      if (parentRow.dataset.retractLocked !== 'true') {
        parentRow.classList.add('is-expanded');
      }
    });

    // Colapsa suavemente cuando el cursor sale de toda la fila y libera el bloqueo de retracción
    parentRow.addEventListener('mouseleave', () => {
      parentRow.classList.remove('is-expanded');
      parentRow.dataset.retractLocked = 'false';
      parentRow.classList.remove('is-retract-locked');
    });

    // Móvil: Tap alterna el despliegue
    trigger.addEventListener('click', (e) => {
      if (e.target.closest('.btn-quote') || e.target.closest('.btn-retract-row')) return;
      parentRow.classList.toggle('is-expanded');
    });
  });

  // Retraer automáticamente al pasar el cursor sobre los spots vacíos del renglón
  pinataRows.forEach(row => {
    const emptySlots = row.querySelectorAll('.row-slot[data-has-expanded-variant="false"]');
    emptySlots.forEach(emptySlot => {
      emptySlot.addEventListener('mouseenter', () => {
        if (row.classList.contains('is-expanded')) {
          row.classList.remove('is-expanded');
        }
      });
    });
  });

  // Botón redondo de retracción en la esquina superior izquierda con bloqueo hasta que el mouse salga
  const retractBtns = document.querySelectorAll('.btn-retract-row');
  retractBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const parentRow = btn.closest('.pinata-row');
      if (parentRow) {
        parentRow.classList.remove('is-expanded');
        // Bloquear re-despliegue mientras el cursor siga dentro de este card / renglón
        parentRow.dataset.retractLocked = 'true';
        parentRow.classList.add('is-retract-locked');
      }
    });
  });

  /* ==========================================================================
     4. MENÚ MÓVIL DRAWER
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNavDrawer.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!mobileNavDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileNavDrawer.classList.contains('open')) {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     5. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(otherItem => otherItem.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  /* ==========================================================================
     6. FORMULARIO MODAL DE RESEÑAS
     ========================================================================== */
  const openReviewModalBtn = document.getElementById('openReviewModalBtn');
  const reviewModal = document.getElementById('reviewModal');
  const closeReviewModalBtn = document.getElementById('closeReviewModalBtn');
  const reviewForm = document.getElementById('reviewForm');

  if (openReviewModalBtn && reviewModal) {
    openReviewModalBtn.addEventListener('click', () => {
      reviewModal.classList.add('open');
    });

    if (closeReviewModalBtn) {
      closeReviewModalBtn.addEventListener('click', () => {
        reviewModal.classList.remove('open');
      });
    }

    reviewModal.addEventListener('click', (e) => {
      if (e.target === reviewModal) {
        reviewModal.classList.remove('open');
      }
    });

    if (reviewForm) {
      reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu reseña! Ha sido recibida.');
        reviewModal.classList.remove('open');
        reviewForm.reset();
      });
    }
  }

  /* ==========================================================================
     7. BOTÓN FLOTANTE: VOLVER ARRIBA DEL CATÁLOGO DE PIÑATAS
     ========================================================================== */
  const btnScrollCatalogTop = document.getElementById('btnScrollCatalogTop');
  const catalogGrid = document.getElementById('catalogGrid');

  if (btnScrollCatalogTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        btnScrollCatalogTop.classList.add('visible');
      } else {
        btnScrollCatalogTop.classList.remove('visible');
      }
    });

    btnScrollCatalogTop.addEventListener('click', () => {
      if (catalogGrid) {
        const yOffset = -120; // Espacio para el navbar fijo
        const y = catalogGrid.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});


  /* ==========================================================================
     8. GENERADOR DE WHATSAPP PARA COTIZADOR
     ========================================================================== */
  const customizerForm = document.getElementById('customizerForm');
  if (customizerForm) {
    customizerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const tipo = document.getElementById('custEventType').value;
      const tamano = document.getElementById('custSize').value;
      const tema = document.getElementById('custTheme').value;
      const fecha = document.getElementById('custDate').value;
      const entrega = document.getElementById('custDelivery').value;
      const notas = document.getElementById('custNotes').value || 'Ninguno';
      const reinforced = document.getElementById('custReinforced').value;
      
      // Image is a local file, we can't attach it directly to WhatsApp web URL, 
      // but we can let them know to send it.
      const imageInput = document.getElementById('custImage');
      const hasImage = imageInput.files && imageInput.files.length > 0;
      const imageText = hasImage ? 'Sí, enviaré la imagen a continuación.' : 'No';

      const message = `¡Hola Piñata Monde! Me gustaría cotizar una piñata:
      
1. Tipo de evento: ${tipo}
2. Tamaño: ${tamano}
3. Personaje/Tema: ${tema}
4. Fecha del evento: ${fecha}
5. Entrega: ${entrega}
6. Extra reforzada: ${reinforced}
7. Lleva imagen de referencia: ${imageText}
8. Detalles especiales: ${notas}

Quedo atento(a) a la cotización.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

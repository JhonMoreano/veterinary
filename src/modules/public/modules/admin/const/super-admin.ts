
export const DASHBOARD_DATA = {
    summaryMetrics: [
      {
        id: "total-vets",
        label: "Total Veterinarias",
        value: 150,
        suffix: null,
        icon: "Store",
        color: "blue"
      },
      {
        id: "active-vets",
        label: "Activas",
        value: 100,
        total: 100,
        suffix: "/100",
        percentage: 20,
        icon: "CheckCircle2",
        color: "green"
      },
      {
        id: "contact-clicks",
        label: "Clicks de Contacto",
        value: 1284,
        suffix: null,
        icon: "MousePointer2",
        color: "purple"
      }
    ],
    subscriptionPlans: [
      {
        name: "Básico",
        count: 85,
        color: "bg-slate-400",
        percentageOfTotal: 56.6
      },
      {
        name: "Intermedio",
        count: 45,
        color: "bg-blue-500",
        percentageOfTotal: 30.0
      },
      {
        name: "Premium",
        count: 20,
        color: "bg-amber-500",
        percentageOfTotal: 13.4
      }
    ],
    clicksByCity: [
      {
        city: "Buenos Aires",
        percentage: "45%",
        rawCount: 578
      },
      {
        city: "Tandil",
        percentage: "28%",
        rawCount: 360
      },
      {
        city: "Córdoba",
        percentage: "15%",
        rawCount: 192
      },
      {
        city: "Rosario",
        percentage: "12%",
        rawCount: 154
      },
    ],

  };
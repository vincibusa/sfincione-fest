import React from 'react';

const PartnerSection = () => {
  const institutionalPartners = [
    { name: 'Città di Bagheria', logo: '/api/placeholder/100/100' },
    { name: 'Unione Europea', logo: '/api/placeholder/100/100' },
    { name: 'Mipaf', logo: '/api/placeholder/100/100' },
    { name: 'FEAMP', logo: '/api/placeholder/100/100' },
    { name: 'ARS', logo: '/api/placeholder/100/100' },
    { name: 'Regione Siciliana', logo: '/api/placeholder/100/100' },
    { name: 'Comune di Piana degli Albanesi', logo: '/api/placeholder/100/100' },
    { name: 'Ordine dei Medici', logo: '/api/placeholder/100/100' },
    { name: 'SAAF', logo: '/api/placeholder/100/100' },
    { name: 'Università degli Studi di Palermo', logo: '/api/placeholder/100/100' }
  ];

  const sponsors = [
    { name: 'Intesa Sanpaolo', logo: '/api/placeholder/150/80' },
    { name: 'Fineco', logo: '/api/placeholder/150/80' },
    { name: 'Electrolux', logo: '/api/placeholder/150/80' },
    { name: 'Sagrim', logo: '/api/placeholder/150/80' },
    { name: 'Donnafugata', logo: '/api/placeholder/150/80' },
    { name: 'Acqua Panna', logo: '/api/placeholder/150/80' },
    { name: 'Coalma', logo: '/api/placeholder/150/80' },
    { name: 'Morettini Forni', logo: '/api/placeholder/150/80' },
    // Aggiungi altri sponsor dall'immagine
  ];

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-700 mb-4">I PARTNER NEGLI ANNI</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Partecipare allo Sfincione Fest vuol dire assicurarsi una grande visibilità in campo nazionale. 
            Importanti brand hanno scelto il Festival come momento di promozione e come strumento di marketing territoriale.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-6">Partner Istituzionali</h2>
          <div className="grid grid-cols-5 gap-8 justify-items-center">
            {institutionalPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-20 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                  title={partner.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-6">Sponsor</h2>
          <div className="grid grid-cols-7 gap-8 justify-items-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                  title={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
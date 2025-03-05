import React, { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion, useInView, animate } from 'framer-motion';
import CountUp from 'react-countup';

const HistoricalDataChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(0, 1, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          setAnimationProgress(latest);
        }
      });

      return () => animation.stop();
    }
  }, [isInView]);

  const originalData = {
    presenze: {
      anno2017: 5000,
      anno2024: 130000,
    },
    giornalisti: {
      anno2017: 15,
      anno2024: 50,
    },
    aziende: {
      anno2017: 30,
      anno2024: 70,
    }
  };

  const getAnimatedValue = (value) => {
    return Math.round(value * animationProgress);
  };

  const presenzeData = [
    {
      name: 'Presenze',
      anno2017: getAnimatedValue(originalData.presenze.anno2017),
      anno2024: getAnimatedValue(originalData.presenze.anno2024),
    }
  ];

  const altriDati = [
    {
      name: 'Giornalisti',
      anno2017: getAnimatedValue(originalData.giornalisti.anno2017),
      anno2024: getAnimatedValue(originalData.giornalisti.anno2024),
    },
    {
      name: 'Aziende',
      anno2017: getAnimatedValue(originalData.aziende.anno2017),
      anno2024: getAnimatedValue(originalData.aziende.anno2024),
    }
  ];

  const calculateGrowthPercentage = (oldValue, newValue) => {
    const growth = ((newValue - oldValue) / oldValue) * 100;
    return growth.toFixed(1);
  };

  const CustomBar = (props) => {
    const { fill, x, width, height, y } = props;
    
    return (
      <motion.rect
        x={x}
        width={width}
        fill={fill}
        initial={{ y: y + height, height: 0 }}
        animate={{ y: y, height: height }}
        transition={{
          type: "spring",
          duration: 1.5,
          bounce: 0.1
        }}
      />
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
  return (
        <div className="bg-bianco/90 p-4 rounded-lg shadow-lg border border-beige-chiaro">
          <p className="font-gotham font-bold text-nero mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="font-gotham text-sm">
              <span style={{ color: entry.color }}>
                {entry.name === '2017' ? '2017: ' : '2024: '}
                {entry.value.toLocaleString()}
        </span>
      </div>
          ))}
          {payload.length === 2 && (
            <div className="mt-2 pt-2 border-t border-beige-chiaro">
              <span className="font-gotham text-sm text-verde-salvia">
                Crescita: +{calculateGrowthPercentage(payload[0].value, payload[1].value)}%
              </span>
      </div>
          )}
    </div>
  );
    }
    return null;
};

  const StatCard = ({ data, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-bianco/80 p-6 rounded-xl shadow-lg"
    >
      <h3 className="font-gotham font-bold text-rosso-mattone mb-3">{data.name}</h3>
      {isInView && (
        <div className="text-2xl font-bold text-verde-salvia">
          <CountUp
            end={Number(calculateGrowthPercentage(data.anno2017, data.anno2024))}
            duration={2}
            decimals={1}
            prefix="+"
            suffix="%"
          />
        </div>
      )}
    </motion.div>
  );

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-bianco via-beige-chiaro/30 to-marroncino/10 p-8 rounded-2xl shadow-xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-sunshine text-center text-rosso-mattone mb-8"
        >
          Crescita e Sviluppo
          <span className="block text-base font-gotham text-nero/60 mt-2">
            2017 - 2024
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[...presenzeData, ...altriDati].map((data, index) => (
            <StatCard key={index} data={data} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-bianco/80 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-gotham font-bold text-center text-rosso-mattone mb-6">
              Presenze all'Evento
            </h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart 
                  data={presenzeData}
                  margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={`${marroncino}20`} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#000000' }} 
                    fontFamily="Montserrat"
                  />
                  <YAxis 
                    tick={{ fill: '#000000' }} 
                    fontFamily="Montserrat"
                    tickFormatter={(value) => value.toLocaleString()}
                    domain={[0, 'dataMax']}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ 
                      fontFamily: 'Montserrat',
                      fontSize: '14px'
                    }} 
                  />
                  <Bar 
                    name="2017" 
                    dataKey="anno2017" 
                    fill={marroncino}
                    shape={<CustomBar />}
                    isAnimationActive={false}
                  />
                  <Bar 
                    name="2024" 
                    dataKey="anno2024" 
                    fill={rossoMattone}
                    shape={<CustomBar />}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-bianco/80 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-gotham font-bold text-center text-rosso-mattone mb-6">
              Giornalisti e Aziende
            </h3>
            {isInView && (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={altriDati}>
                  <CartesianGrid strokeDasharray="3 3" stroke={`${marroncino}20`} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 70]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar 
                    name="2017" 
                    dataKey="anno2017" 
                    fill={marroncino}
                    shape={<CustomBar />}
                  />
                  <Bar 
                    name="2024" 
                    dataKey="anno2024" 
                    fill={rossoMattone}
                    shape={<CustomBar />}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
      </motion.div>
    </div>
      </motion.div>
    </div>
  );
};

const rossoMattone = '#B22222';
const marroncino = '#F2C26B';

export default HistoricalDataChart;
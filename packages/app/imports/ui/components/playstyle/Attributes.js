import Attribute from './Attribute';
import PolarGrid from 'recharts/lib/polar/PolarGrid';
import PropTypes from 'prop-types';
import Radar from 'recharts/lib/polar/Radar';
import RadarChart from 'recharts/lib/chart/RadarChart';
import React from 'react';

const Attributes = ({ attributes, style }) => {
  const tmpAttributes = attributes || {
    cunning: 0,
    lethality: 0,
    wisdom: 0,
    power: 0,
    capability: 0,
    robustness: 0,
    combat: 0,
    cooperation: 0
  };
  const data = [
    { value: tmpAttributes.wisdom || 0 },
    { value: tmpAttributes.lethality || 0 },
    { value: tmpAttributes.cunning || 0 },
    { value: tmpAttributes.cooperation || 0 },
    { value: tmpAttributes.combat || 0 },
    { value: tmpAttributes.robustness || 0 },
    { value: tmpAttributes.capability || 0 },
    { value: tmpAttributes.power || 0 }
  ];
  const tmpStyle = Object.assign(
    {
      height: 500,
      width: 500,
      position: 'relative',
      margin: '0 auto'
    },
    style
  );
  const attributeSize = parseInt(tmpStyle.width / 7);
  const halfAttributeSize = parseInt(attributeSize / 2);
  return (
    <div style={tmpStyle}>
      <RadarChart
        data={data}
        height={tmpStyle.height}
        innerRadius={parseInt(tmpStyle.width / 16)}
        outerRadius={parseInt(tmpStyle.width / 3)}
        width={tmpStyle.width}
      >
        <PolarGrid />
        <Radar dataKey="value" fill="#4478a5" fillOpacity={0.6} stroke="#ebf5f3" />
      </RadarChart>
      <Attribute
        attribute="wisdom"
        style={{
          position: 'absolute',
          top: 0,
          left: `calc(50% - ${halfAttributeSize}px)`,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.wisdom}
      />
      <Attribute
        attribute="capability"
        style={{
          position: 'absolute',
          top: `calc(50% - ${halfAttributeSize}px)`,
          left: 0,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.capability}
      />
      <Attribute
        attribute="cooperation"
        style={{
          position: 'absolute',
          top: `calc(80% - ${halfAttributeSize}px)`,
          left: `calc(80% - ${halfAttributeSize}px)`,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.cooperation}
      />
      <Attribute
        attribute="robustness"
        style={{
          position: 'absolute',
          top: `calc(80% - ${halfAttributeSize}px)`,
          left: `calc(20% - ${halfAttributeSize}px)`,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.robustness}
      />
      <Attribute
        attribute="lethality"
        style={{
          position: 'absolute',
          top: `calc(20% - ${halfAttributeSize}px)`,
          left: `calc(80% - ${halfAttributeSize}px)`,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.lethality}
      />
      <Attribute
        attribute="cunning"
        style={{
          position: 'absolute',
          top: `calc(50% - ${halfAttributeSize}px)`,
          right: 0,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.cunning}
      />
      <Attribute
        attribute="combat"
        style={{
          position: 'absolute',
          bottom: 0,
          left: `calc(50% - ${halfAttributeSize}px)`,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.combat}
      />
      <Attribute
        attribute="power"
        style={{
          position: 'absolute',
          top: `calc(20% - ${halfAttributeSize}px)`,
          left: `calc(20% - ${halfAttributeSize}px)`,
          height: attributeSize,
          width: attributeSize
        }}
        value={tmpAttributes.power}
      />
    </div>
  );
};

Attributes.propTypes = {
  attributes: PropTypes.object,
  style: PropTypes.object
};

export default Attributes;

import React from 'react';
import {View, SizableText, Button} from 'tamagui';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  value: number; // current value
  max: number; // max value
};

export default function SemiCircleProgress({value, max}: Props) {
  const size = 220;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const percent = Math.max(0, Math.min(1, value / max));
  const angle = Math.PI * percent;

  // Helper to describe an arc path
  function describeArc(
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number,
  ) {
    const start = {
      x: cx + r * Math.cos(startAngle),
      y: cy + r * Math.sin(startAngle),
    };
    const end = {
      x: cx + r * Math.cos(endAngle),
      y: cy + r * Math.sin(endAngle),
    };
    const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';
    return [
      'M',
      start.x,
      start.y,
      'A',
      r,
      r,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
    ].join(' ');
  }

  // Knob position
  const knobAngle = Math.PI + angle;
  const knobX = center + radius * Math.cos(knobAngle);
  const knobY = center + radius * Math.sin(knobAngle);

  return (
    <View alignItems="center" justifyContent="center">
      <Svg width={size} height={size / 2}>
        {/* Background arc */}
        <Path
          d={describeArc(center, center, radius, Math.PI, 0)}
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc */}
        <Path
          d={describeArc(center, center, radius, Math.PI, Math.PI + angle)}
          stroke="#1F1F1F"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {/* Knob */}
        <Circle cx={knobX} cy={knobY} r={strokeWidth / 1.5} fill="#1F1F1F" />
      </Svg>
      {/* Overlay your text and button here */}
      <View position="absolute" top={60} left={0} right={0} alignItems="center">
        <SizableText size="$8" fontWeight="bold">
          ${value}
        </SizableText>
        <SizableText size="$3" color="$gray10">
          See details
        </SizableText>
        <View marginTop={20}>
          <Button
            width={48}
            height={48}
            borderRadius={24}
            backgroundColor="#1F1F1F"
            padding={0}
            alignItems="center"
            justifyContent="center"
            onPress={() => {
              // TODO: Navigate to the new screen here
              // e.g. navigation.navigate('NewScreen')
            }}>
            <SizableText color="#fff" fontSize={32}>
              +
            </SizableText>
          </Button>
        </View>
      </View>
      {/* Min/Max labels */}
      <View
        position="absolute"
        top={size / 1.9}
        left={0}
        width={size}
        flexDirection="row"
        justifyContent="space-between">
        <SizableText size="$3" fontWeight="bold">
          $0
        </SizableText>
        <SizableText size="$3" fontWeight="bold">
          ${max.toLocaleString()}
        </SizableText>
      </View>
    </View>
  );
}

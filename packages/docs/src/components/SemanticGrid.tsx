import { colorsSemantic } from '@apollo-ds/tokens';
import { getContrast } from 'polished';

export function SemanticGrid() {
  const renderColorGrid = (category: keyof typeof colorsSemantic) => (
    Object.entries(colorsSemantic[category]).map(([tokenName, colorValue]) => (
      <div
        key={tokenName}
        style={{
          backgroundColor: colorValue,
          padding: '1rem',
          margin: '0.5rem',
          width: '120px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: getContrast(colorValue, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>{tokenName}</strong>
          <p>{colorValue}</p>
        </div>
      </div>
    ))
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Background</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {renderColorGrid('background')}
        </div>
      </div>

      <div>
        <h3>Text</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {renderColorGrid('text')}
        </div>
      </div>

      <div>
        <h3>Stroke</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {renderColorGrid('stroke')}
        </div>
      </div>

      <div>
        <h3>Icon</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {renderColorGrid('icon')}
        </div>
      </div>

      {/* Adicione outras categorias de cores aqui, como stroke, icon, etc. */}
    </div>
  );
}

# brut

Libreria de componentes brutalistas en React

## Instalar

```bash
npm install brut
```

## Uso

```tsx
import { Badge, Button, Card, Stack, TextField } from 'brut';
import 'brut/style.css';

export function Example() {
  return (
    <Card
      eyebrow={<Badge tone="accent">Nuevo</Badge>}
      heading="Sistema brutalista"
      description="Componentes con bordes fuertes, sombras secas y una API pequeña."
      footer={<Button>Accion principal</Button>}
    >
      <Stack gap="sm">
        <TextField label="Email" placeholder="hola@dominio.com" helperText="Sin logos, sin ruido." />
        <Button variant="secondary">Guardar</Button>
      </Stack>
    </Card>
  );
}
```

## Desarrollo

- `npm run dev`
- `npm run build`
- `npm run lint`

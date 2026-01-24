# Hero Section Animation Documentation

This document details the implementation of two key animation effects inspired by [Linear's landing page](https://linear.app/):

1. **Text Fade-in Animation** - Word-by-word reveal with blur and vertical movement
2. **HeroIllustration Animation** - 3D perspective app mockup with staggered element reveals

---

## 1. Text Fade-in Animation

### Overview

The text fade-in effect creates a smooth, word-by-word reveal where each word animates in sequence with:
- Opacity transition (0 → 1)
- Blur transition (8px → 0px)
- Vertical translation (100% → 0%)

### Implementation

Located in: `src/components/AnimatedText.tsx`

### How It Works

1. **Word Splitting**: The text string is split into individual words
2. **Inline-block Display**: Each word is wrapped in a `<span>` with `display: inline-block` to allow transforms
3. **Staggered Delays**: Each word has a progressively increasing `transition-delay`
4. **CSS Transitions**: All properties animate using CSS transitions for smooth, GPU-accelerated performance

### Key CSS Properties

```css
/* Initial state (hidden) */
opacity: 0;
filter: blur(8px);
transform: translateY(100%);

/* Final state (visible) */
opacity: 1;
filter: blur(0px);
transform: translateY(0%);

/* Transition */
transition: all 500ms ease-out;
transition-delay: calc(wordIndex * 80ms);
```

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | required | The text to animate |
| `className` | string | "" | Additional CSS classes |
| `as` | keyof JSX.IntrinsicElements | "span" | HTML element to render |
| `delay` | number | 0 | Initial delay before animation starts (ms) |
| `staggerDelay` | number | 80 | Delay between each word (ms) |

### Usage Example

```tsx
import { AnimatedText } from "@/components";

<h1>
  <AnimatedText
    text="Your amazing headline text here"
    delay={100}
    staggerDelay={80}
  />
</h1>
```

### Accessibility

- Screen readers receive the full text via a `sr-only` span
- The animated version is marked with `aria-hidden="true"`
- No content is hidden from assistive technologies

---

## 2. HeroIllustration Animation

### Overview

The HeroIllustration creates a 3D perspective view of an app interface that animates into view from below the viewport. Key features:
- **Slide-up entry**: The illustration starts 200px below its final position, creating the effect of rising from outside the screen
- **Blur-to-sharp**: Starts with 16px blur, transitioning to crisp focus
- **3D rotation**: Subtle rotation changes during the animation add depth
- CSS 3D transforms with perspective
- Staggered reveal of UI elements
- Depth effect with gradient overlays

### Implementation

Located in: `src/components/HeroIllustration.tsx`

### How It Works

1. **Perspective Container**: A parent div establishes the 3D perspective origin (4000px)
2. **Slide-up Animation**: The illustration starts with `translateY(200px)`, pushing it below its final position. Combined with opacity 0 and blur, this creates the effect of the element emerging from outside the visible viewport
3. **3D Transforms**: The main content rotates on X, Y, and Z axes, with slightly more aggressive rotation in the initial state
4. **Staggered Children**: Internal elements animate in sequence with individual delays
5. **Depth Effects**: Gradient overlays create a sense of depth

### The "Coming From Outside" Effect

The key to making the illustration appear to come from outside the screen is the combination of:

| Property | Initial | Final | Effect |
|----------|---------|-------|--------|
| `translateY` | 200px | 0px | Slides up from below |
| `opacity` | 0 | 1 | Fades in during movement |
| `filter: blur()` | 16px | 0px | Sharpens as it arrives |
| `rotateX` | 30deg | 20deg | Tilts forward slightly |

The 200px translateY value was chosen to push the illustration far enough down that it appears to enter from off-screen, while the blur creates a sense of distance/depth before it "arrives" in focus.

### Key CSS Properties

#### Perspective Container
```css
perspective: 4000px;
perspective-origin: 50% 0%;
```

#### 3D Transform Base
```css
/* Initial state - starts from below the viewport */
transform: rotateX(30deg) rotateY(-20deg) rotateZ(5deg) translateY(200px);
filter: blur(16px);
opacity: 0;

/* Final state */
transform: rotateX(20deg) rotateY(-15deg) rotateZ(2deg) translateY(0px);
filter: blur(0px);
opacity: 1;

/* Preserve 3D for children */
transform-style: preserve-3d;

/* Transition */
transition: all 1000ms ease-out;
```

#### Animated Elements
```css
/* Initial state */
opacity: 0;
filter: blur(4px);
transform: translateZ(-20px) translateX(-10px);

/* Final state */
opacity: 1;
filter: blur(0px);
transform: translateZ(0px) translateX(0px);

/* Transition */
transition: all 700ms ease-out;
```

### Animation Timing Sequence

| Element | Delay | Description |
|---------|-------|-------------|
| Base container | 400ms | Main 3D rotation animation starts |
| Traffic lights | 600ms | Window control dots |
| Window title | 700ms | App name in title bar |
| Sidebar items | 800-1100ms | Navigation items stagger in |
| Main content | 1000-1400ms | Issue details stagger in |

### Structure

```
HeroIllustration
├── Perspective Container (perspective: 4000px)
│   └── 3D Base (rotateX, rotateY, rotateZ)
│       └── App Window
│           ├── Title Bar
│           │   ├── Traffic Lights
│           │   └── App Name
│           └── Content Area
│               ├── Sidebar
│               │   ├── Inbox (active)
│               │   ├── My Issues
│               │   ├── Projects
│               │   └── Teams
│               └── Main Content
│                   ├── Breadcrumb
│                   ├── Title
│                   ├── Status badges
│                   ├── Description
│                   └── Code block
└── Gradient Overlay (depth effect)
```

### Usage Example

```tsx
import { HeroIllustration } from "@/components";

<section className="bg-black">
  <HeroIllustration />
</section>
```

---

## 3. Combined Hero Component

### Overview

The `Hero` component combines both animations into a complete hero section with:
- Animated headline
- Fade-in subtitle
- Fade-in CTA buttons
- 3D illustration

### Implementation

Located in: `src/components/Hero.tsx`

### Animation Timeline

| Time | Element | Animation |
|------|---------|-----------|
| 100ms | Headline words | Start word-by-word fade-in |
| 400ms | Illustration | Start 3D rotation animation |
| 600-1400ms | Illustration elements | Stagger in |
| 800ms | Subtitle | Fade in with blur |
| 1000ms | CTA buttons | Fade in with blur |

### Usage

```tsx
import { Hero } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

---

## Performance Considerations

1. **GPU Acceleration**: Using `transform` and `opacity` ensures animations run on the GPU
2. **Will-change**: Could be added for complex animations (use sparingly)
3. **Reduced Motion**: Consider adding `prefers-reduced-motion` media query support

### Adding Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Customization

### Adjusting Animation Speed

Modify these values in the components:

- `staggerDelay`: Time between each word (default: 80ms)
- `duration-500` / `duration-700` / `duration-1000`: Tailwind transition duration classes
- Individual `delay` props on AnimatedElement components

### Adjusting 3D Perspective

In HeroIllustration, modify:

- `perspective`: Higher values = subtler 3D effect (default: 4000px)
- `rotateX/Y/Z`: Adjust the tilt angles
- `perspectiveOrigin`: Changes the viewpoint position

---

## File Structure

```
src/components/
├── index.ts              # Barrel exports
├── Hero.tsx              # Main hero section
├── AnimatedText.tsx      # Word-by-word text animation
└── HeroIllustration.tsx  # 3D app mockup animation
```

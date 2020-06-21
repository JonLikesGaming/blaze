import { h } from 'preact';

function Fab({ children, icon, ...props }) {

  return (
    <button class="fab" {...props}>
      <span class={icon} />
      <div class="lg-text">
        {children}
      </div>
      <slot />
    </button>
  );
}

export default Fab;
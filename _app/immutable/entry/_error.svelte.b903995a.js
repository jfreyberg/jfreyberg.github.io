import { S as SvelteComponent, i as init, s as safe_not_equal, q as text, r as claim_text, b as insert_hydration, G as noop, h as detach } from "../chunks/index.023a1cf2.js";
function create_fragment(ctx) {
  let t;
  return {
    c() {
      t = text("404 - This page does not exist :(");
    },
    l(nodes) {
      t = claim_text(nodes, "404 - This page does not exist :(");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
class Error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Error as default
};

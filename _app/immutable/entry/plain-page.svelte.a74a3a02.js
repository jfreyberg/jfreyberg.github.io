import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, y as create_component, l as claim_element, m as children, z as claim_component, h as detach, n as attr, b as insert_hydration, A as mount_component, G as noop, g as transition_in, d as transition_out, B as destroy_component } from "../chunks/index.0616d844.js";
import { C as CV } from "../chunks/CV.dd570973.js";
function create_fragment(ctx) {
  let div;
  let cv;
  let current;
  cv = new CV({});
  return {
    c() {
      div = element("div");
      create_component(cv.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(cv.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "w-full bg-white flex overflow-scroll items-center justify-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(cv, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(cv.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(cv.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(cv);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};

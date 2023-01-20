export default function MemberSectionNavListElement({ name, elem, active }) {
  return <li className={active === elem ? "active" : null}>{name}</li>;
}

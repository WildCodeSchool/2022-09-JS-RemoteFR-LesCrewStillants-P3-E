export default function NavMemberListElement({
  index,
  name,
  selected,
  hundleChange,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={index}
      onClick={() => {
        hundleChange(index);
      }}
      onKeyDown={() => {
        hundleChange(index);
      }}
      className={index === selected ? "active" : ""}
    >
      <span className="navListText">{name}</span>
    </li>
  );
}

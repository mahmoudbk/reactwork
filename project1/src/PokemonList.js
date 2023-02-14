export default function PokemonList({pokemon}) {
    return (
        <div>
            {pokemon.map(p => {
              return  <h2 key={p}>{p}</h2>
            })}
        </div>
    )
}
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vyejudhgyrlqkcljjaaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5ZWp1ZGhneXJscWtjbGpqYWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MTk5OTUsImV4cCI6MjA5MzQ5NTk5NX0.lwn8hpQddi5IDunE_ut81b-hagVcyJgjv__3qtcEfto'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}


obtenerEstudiantes()

async function insertarEstudiante(nombre, carrera, matricula) {
  const { data, error } = await supabase
    .from('estudiantes')
    .insert([
      { 
        nombre: nombre, 
        carrera: carrera, 
      }
    ])
    .select()
if (error) {
    console.log('Error al insertar:', error)
  } else {
    console.log('Estudiante insertado con éxito:', data)
  }
}

async function main() {
  await insertarEstudiante('Cesar Nerio', 'ITS')
  await obtenerEstudiantes()
}

main()
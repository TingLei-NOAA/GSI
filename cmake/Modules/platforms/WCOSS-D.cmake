macro (setWCOSS_D)
  message("Setting paths for Dell")
  option(FIND_HDF5 "Try to Find HDF5 libraries" OFF)
  option(FIND_HDF5_HL "Try to Find HDF5 libraries" OFF)

  set(HOST_FLAG "-xHOST" CACHE INTERNAL "Host Flag")
  set(MKL_FLAG "-mkl"  CACHE INTERNAL "MKL Flag")
  set(GSI_Intel_Platform_FLAGS "-DPOUND_FOR_STRINGIFY -fp-model strict -assume byterecl -convert big_endian -implicitnone -D_REAL8_ ${OpenMP_Fortran_FLAGS} ${MPI_Fortran_COMPILE_FLAGS} -O3" CACHE INTERNAL "GSI Fortran Flags")
  set(GSI_LDFLAGS "${OpenMP_Fortran_FLAGS} ${MKL_FLAG}" CACHE INTERNAL "")
  set(ENKF_Platform_FLAGS "-O3 -fp-model strict -convert big_endian -assume byterecl -implicitnone  -DGFS -D_REAL8_ ${MPI3FLAG} ${OpenMP_Fortran_FLAGS} " CACHE INTERNAL "ENKF Fortran Flags")

  set(HDF5_USE_STATIC_LIBRARIES "ON" CACHE INTERNAL "" )
  if( NOT DEFINED ENV{COREPATH} )
    set(COREPATH "/gpfs/dell1/nco/ops/nwprod/lib"  )
  else()
    set(COREPATH $ENV{COREPATH}  )
  endif()
  if( NOT DEFINED ENV{CRTM_INC} )
    set(CRTM_BASE "/gpfs/dell1/nco/ops/nwprod/lib/crtm"  )
  endif()
endmacro()